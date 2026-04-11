import uuid
from flask import Flask, request, send_file, after_this_request, send_from_directory
import yt_dlp
from flask_socketio import SocketIO
import os
import tempfile
# 一時ファイルを被らせない
import uuid
# ファイルをメモリに安全に読み込ませる
import io
from mutagen.mp3 import MP3
from mutagen.id3 import ID3, TIT2, TPE1, COMM
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}}, supports_credentials=True)
socketio = SocketIO(app, async_mode='eventlet', cors_allowed_origins="http://localhost:5173")

# ファイル名整形
def sanitize_filename(filename):
    sanitized = filename.translate(str.maketrans('', '', '【】「」\'/')).replace(' ', '_').strip()[:100]
    return sanitized

# 変換するファイルの音質設定、ダウンロード
def download_audio(url, output_file):
    ydl_opts = {
        'format': 'bestaudio/best',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '320',
        }],
        'outtmpl': output_file,
    }
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])

# mp3タグ編集
def set_metadata(file_path, title, artist_name, comment):
    # mutagenを使ってタグを設定
    audio = MP3(file_path, ID3=ID3)

    # タグがない場合、初期化
    # サーバーエラーで止まらなくなる
    if audio.tags is None:
        audio.add_tags()

    if title:
        audio.tags.add(TIT2(encoding=3, text=title))
    if artist_name:
        audio.tags.add(TPE1(encoding=3, text=artist_name))
    if comment:
        audio.tags.add(COMM(encoding=3, lang='eng', desc='', text=comment))
    audio.save()


@app.route('/images/<path:filename>')
def send_image(filename):
    return send_from_directory('images', filename)

# ファイル詳細テキストの処理
@app.route('/download', methods=['POST'])
def download():
    if request.method == "OPTIONS":
        return "", 200
    
    data = request.get_json() or {}
     
    # フロントから送らたデータを受け取る
    youtube_url = data.get('youtubeUrl')
    file_name = data.get('fileName', '')
    artist_name = data.get('artist', '')
    comment = data.get('comment', '')

    # ファイル名ない場合の処理
    if not file_name:
        return "Custom Filename is required", 400
    if not youtube_url:
        return "Youtube Url is required", 400
    
    # youtubeの簡易バリデーション
    if "youtube.com/" not in youtube_url and "youtu.be/" not in youtube_url:
        return "Involid Youtube URL"
    
    # ファイル名整形(sanitaize_filenake)
    sanitized_filename = sanitize_filename(file_name)

    # 一時的にファイル作成(UUIDを用いてファイル名を一致)
    # uuid=128ビットの識別子。理論上重複しない
    temp_dir = tempfile.gettempdir()
    # ランダムな文字列を生成
    unqiue_string = uuid.uuid4().hex
    # 元のファイル名＋uuidで絶対に被らない
    temp_output = os.path.join(temp_dir, f"{sanitized_filename}_{unqiue_string}")

    # youtubeから音声を取得
    try:
        download_audio(youtube_url, temp_output)
    except Exception as e:
        return f"Error downloading file: {e}", 500
    
    # ファイルに拡張子つけている
    final_output_file = temp_output + '.mp3'

    if not os.path.exists(final_output_file):
        return f"File not found: {final_output_file}", 404

    # 元のファイル名をMP3タグとして使用、拡張子は消える
    set_metadata(final_output_file, file_name, artist_name, comment)

    # ファイルをバイナルメモリとしてメモリに読み込む
    return_data = io.BytesIO()
    with open(final_output_file, "rb") as f:
        return_data.write(f.read())

    # 読み終わったらメモリ読み取り位置を先頭に戻す
    return_data.seek(0)

    # メモリに読み込んだので、即座にサーバー上ファイルを削除(エラーの温床)
    try:
        os.remove(final_output_file)
    
    except Exception as e:
        print(f"Error deleting file: {e}")
    return send_file(
        return_data,
        as_attachment=True,
        download_name=f"{sanitized_filename}.mp3",
        mimetype="audio/mpeg"
    )

if __name__ == '__main__':
    socketio.run(app, debug=True, 
    host="0.0.0.0", port=5001)