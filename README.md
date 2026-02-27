<div id="top"></div>

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [外観](#外観)
3. [使用技術一覧](#使用技術一覧)
4. [環境](#環境)
5. [ディレクトリ構成](#ディレクトリ構成)
6. [セットアップ](#セットアップ)
7. [動作確認](#動作確認)

<!-- プロジェクト名 -->

## mp3converter

Mp3converterのリポジトリ

<!-- プロジェクトについて -->

## プロジェクトについて

動画投稿サイトに投稿された動画の音声をmp3としてpcへダウンロードするアプリになります。
⚠️作成動機は、趣味であるDJプレイで用いる楽曲を極めて個人的にダウンロードする為であり、規約違反を助長する意図は全くありません。
MP3変換機能を搭載したサイトは数多く存在していますが、お世辞にも良い操作感とは言えず
・タグ書き込み機能非搭載
・変換時に時間を要する
・広告有り
の３つの問題をを解決できるように意識して制作しました。

<p align="right">(<a href="#top">トップへ</a>)</p>

<!-- 外観 -->

## 外観

主な機能は、MP3変換機能、バリデート機能、フォーム一括リセット機能、テーマカラー変更機能

## GIF
<img src="./readmePhoto/デモGIF.gif"


・MP3変換機能  
ボタン押下後、MP3がPC内にダウンロードされます


・バリデート機能  
URL入力欄は規定されたUrlの形式のみ受け付けます。規定外の入力・未入力を検知するとバリデート機能が作動し、入力したテキストのリセット・警告メッセージが表示されます。  FileNameも同様に未入力を検知すると警告メッセージが表示されます。  テキスト最後尾に＊がついている部分は入力の有無関係なく変換可能です。


・ダウンロード機能＋重複ダウンロード防止機能  
変換ボタンを押下すると変換が開始され、変換終了後はUrlとFileNameの欄に空文字が挿入され入力値がリセットされます。


・フォーム一括リセット機能  
RESETボタン押下後、フォームに入力された全テキストを空文字が上書きし入力値が空になります。


・テーマカラー変更機能
上部のボタンを用いてダークモードとライトモードの切り替えが可能です。


外観及び変換前のテキストを入力した状態です。
<img src="./readmePhoto/変換前.png">


ダークモード
<img src="./readmePhoto/ダークモード.png">


ダウンロード後のmp3タグには対応した箇所に、入力したテキストが挿入されています
<img src="./readmePhoto/入力値確認.png">


規定外のUrl入力を検知した場合
<img src="./readmePhoto/URL誤り.png">


スマホ表示に対応
<img src="./readmePhoto/iphoneSE.png">

<p align="right">(<a href="#top">トップへ</a>)</p>

## 使用技術一覧

<!-- シールド一覧 -->
<p style="display: inline">
  <!-- フロントエンド -->
    <img src="https://img.shields.io/badge/-Typescript-007ACC.svg?logo=typescript&style=plastic">
    <img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
    <img src="https://img.shields.io/badge/-TailwindCSS-000000.svg?logo=tailwindcss&style=for-the-badge">
    <!-- バックエンド -->
    <img src="https://img.shields.io/badge/-Python-F2C63C.svg?logo=python&style=for-the-badge">
</p>

<p align="right">(<a href="#top">トップへ</a>)</p>

## 環境

<!-- 言語、フレームワークのバージョン -->


| 言語・フレームワーク  | バージョン |
| --------------------- | ---------- |
| Python                | 3.13.7     |
| React                 | 19.2.0     |
| tailwindcss           | 4.1.18     |

|使用AI|
|-----------------------|
|claude|
|Copilot|
|GitHubCopilot|
|Grok|
|chatGPT|




### フロントエンド

外枠は、TSX、フォーム部分はTSXとReactHookForm+zodで作成しました。  
当初はReactUseReducerでフォームの値を管理していましたが、作成する過程でRHFの方がシンプルかつReactの設計思想に合致しているのでこちらを選びました。
Reducerと比較して、値の管理、バリデートの実装・変更が容易になった、と同時に、ある程度の型が用意されているRHFは、複雑な実装に向いていないとも感じました。
cssフレームワークにtailwind-variantsを選択した理由も同様です。  
元々、cssを用いてスタイルを当てていましたが、学習コストが高く時間的制約により、直感的なtailwind-cssに変更。しかしながら、ClassNameが冗長になり可読性が落ちてしまった為、最終的にはtailwind-variantsを選択。スタイルと対象のTSXを別ファイルで管理したことにより、可読性が改善、直感的に対象へ当てているスタイルが確認可能になり開発速度が向上しました。

### バックエンド

mutagenを用いてmp3ダウンロードと同時に、mp3タグを編集できる機能の実装、タグ情報をitunesの外で編集可能になりました。
作成した当初は、eyed3を用いてタグ編集機能を実装していましたが、たまに失敗する時があった為、mutagenに変更しました。


### AIについて

フロントエンドの補助とバックエンド全般で使用しました。
使用する上で意識した点は、
出力されたコードを理解して使用する事、
実装方法が分からない時は(フロントエンドに限る)今ある知識を用いてある程度の形にしたものをAIに添削してもらう方法で実装する事、
を意識しました。

<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成

<!-- ディレクトリ構造は上下,,,で囲む -->

```
.
├── バックエンド
│   └── app.py
├── フロントエンド
│   ├── eslint.config.js
│   ├── index.html
│   ├── src
│   │   ├── api
│   │   │   └── audioDownloadApi.ts
│   │   ├── App.tsx
│   │   ├── components
│   │   │   ├── ErrorList.tsx
│   │   │   ├── FormResetButton.tsx
│   │   │   ├── InputForm.tsx
│   │   │   ├── InputFormButton.tsx
│   │   │   ├── InputText.tsx
│   │   │   └── TextForm.tsx
│   │   ├── context
│   │   │   └── DisplayColorContext.ts
│   │   ├── index.css
│   │   ├── main.tsx
│   │   ├── tv
│   │   │   ├── app.tv.ts
│   │   │   └── components
│   │   │       ├── displayMode.tv.ts
│   │   │       ├── errorList.tv.ts
│   │   │       ├── inputFormButton.ts
│   │   │       └── textForm.ts
│   │   └── utils
│   │       ├── callApi.ts
│   │       └── schema.ts
│   └── vite.config.ts
└── README.md
```

<p align="right">(<a href="#top">トップへ</a>)</p>

## セットアップ

**フロントエンド**

```bash
npm install
npm run dev
```

**バックエンド**

```bash
pip install -r requirements.txt
python app.py
```

### 動作確認

1 フロントエンド・バックエンドの両方を起動

2 http://localhost:5173/ にアクセス

3 フォームのラベルに対応したテキストを入力

4 MP3がダウンロードできたら成功

<p align="right">(<a href="#top">トップへ</a>)</p>
