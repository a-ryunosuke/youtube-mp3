require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // 追加

const app = express();
app.use(express.json());
// フロントからのアクセスを許可
app.use(cors({ origin: "http://localhost:5173" })); // 追加
const port = process.env.PORT || 5000;

const posts = require('./routes/route');
app.use('/api/posts', posts);

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log('データベース接続に成功しました'))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`server running at localhost:${port}`));