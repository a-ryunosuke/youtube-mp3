const Jwt = require("jsonwebtoken");

const authMiddleware = ( req, res, next ) => {
    const authHeader = req.headers["authorization"]
    // Bearer TOKEN　のTOKEN部分とは？
    // 利用者の情報が色々詰まったやつ
    // bearerTokenは ["Bearer", "トークン"]で渡される
    // [1]　でトークン部分のみ取り出している
    const token = authHeader && authHeader.split(" ")[1];

    // tokenが無かった場合
    if(!token) return res.status(401).json({ message: "トークンがありません" })
    
    try {
        // token検証
        // JWT_SECRET　ランダムな文字列に変更する
        const decoded = Jwt.verify(token, process.env.JWT_SECRET);
        // ユーザーID付与
        req.userId = decoded.userId;
        // 次の処理へ
        next()
    } catch (err) {
        res.status(403).json({ message: "無効なトークンです"});
    }
}

// export const にしない理由はなぜ？
// Node.jsの構文はCommonJSなので使えない
module.exports = authMiddleware;