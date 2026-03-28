const express = require("express");
const router = express.Router();
const API = require("../controllers/controllers");
const authMiddleware = require("../controllers/middleware");

// 認証不要
// 全て取得
// 値が固定="/signup"
// 値が可変="/:id"
router.get("/", API.fetchAllPost);
// IDを取得
router.get("/:id", API.fetchPostDetail)
// サインアップ
router.post("/signup", API.signup);
// ログイン
router.post("/login", API.login);

// 認証必須
// 不要との違いはauthMiddlewareを挟むことによってトークンが無効なリクエストを弾く
// 下記のそれぞれがmiddlewareの三つの引数に割り当てられる
// router.post("req", res, next)
router.post("/", authMiddleware, API.createPost);
router.put("/:id", authMiddleware, API.updatePost);
router.delete("/:id", authMiddleware, API.deletePost)

module.exports = router;