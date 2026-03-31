const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    youtubeUrl: { type: String, required: true },
    fileName: { type: String, required: true },
    artist: { type: String },
    comment: { type: String },
    // ユーザーと履歴を紐ずける
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("POST", PostSchema);