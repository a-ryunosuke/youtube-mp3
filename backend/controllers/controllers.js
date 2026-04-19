const Post = require("../models/models")
const bcrypt = require("bcrypt")
const Jwt = require("jsonwebtoken")
const User = require("../models/userModel")

module.exports = class API {
  // 全ての投稿を取得
  static async fetchAllPost(req, res) {
    try {
      const posts = await Post.find({ userId: req.userId });
      res.status(200).json(posts);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  // 指定IDの詳細取得
  static async fetchPostDetail(req, res) {
    const id = req.params.id;
    try {
      const post = await Post.findById(id);
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  // 投稿（middlewareのuserIdを追加）
  static async createPost(req, res) {
    try {
      const post = {
        ...req.body,
        // middlewareで付与されたuserId追加
        userId: req.userId
      };
      await Post.create(post);
      res.status(201).json({ message: "変換履歴追加" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  // 投稿の更新
  static async updatePost(req, res) {
    const id = req.params.id;
    const newPost = req.body;
    try {
      await Post.findByIdAndUpdate(id, newPost);
      res.status(201).json({ message: '更新に成功！' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  // 投稿の削除
  static async deletePost(req, res) {
    const id = req.params.id;
    try {
      await Post.findByIdAndDelete(id);
      res.status(201).json({ message: '投稿の削除に成功！' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  // ユーザー登録
  static async signup(req, res) {
    const { email, password } = req.body;
    try {
      const hashed = await bcrypt.hash(password, 10);
      await User.create({ email, password: hashed });
      res.status(201).json({ message: "ユーザー登録成功！" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  // ログイン
  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: "ユーザーが見つかりません" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).json({ message: "パスワードが一致しません" });

      const token = Jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
      res.status(200).json({ token });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};