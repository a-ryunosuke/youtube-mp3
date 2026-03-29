const mongoose =  require("mongoose")

const PostSchema = mongoose.Schema({
    title: { type: String, required: true},
    content: { type: String, required: true},
    // ユーザーと履歴を紐ずける
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    created_at: { type: Date, default: Date.now}
});

module.exports = mongoose.model("POST", PostSchema);