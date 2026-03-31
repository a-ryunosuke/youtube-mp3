const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    // メールアドレスの型定義
    // { type: 入力値の型, required: 必須かどうか, unique: 重複防止}
    email: { type: String, required: true, unique: true },
    // パスワードの型定義
    password: { type: String, required: true },
    // 登録日時
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);