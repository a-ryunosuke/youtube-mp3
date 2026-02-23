<div id="top"></div>

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

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [セットアップ](#セットアップ)
5. [トラブルシューティング](#トラブルシューティング)

<!-- プロジェクト名 -->

## YoutubeMp3converter

YoutubeMp3converterのリポジトリ

<!-- プロジェクトについて -->

## プロジェクトについて

youtubeに投稿された動画の音声をmp3としてpcへダウンロードするアプリ

<p align="right">(<a href="#top">トップへ</a>)</p>

## 環境

<!-- 言語、フレームワークのバージョン -->

| 言語・フレームワーク  | バージョン |
| --------------------- | ---------- |
| Python                | 3.13.7     |
| React                 | 19.2.0     |
| tailwindcss           | 4.1.18     |

<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成

.
├── backend
│   └── app.py
├── frontend
│   ├── eslint.config.js
│   ├── index.html
│   ├── src
│   │   ├── api
│   │   │   └── audioDownloadApi.tsx
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
│   │   ├── hooks
│   │   │   ├── useConverterHistory.ts
│   │   │   ├── useConvertProgress.ts
│   │   │   ├── useErrorText.ts
│   │   │   └── useFileTextHooks.ts
│   │   ├── index.css
│   │   ├── main.tsx
│   │   ├── tv
│   │   │   ├── app.tv.ts
│   │   │   └── components
│   │   │       ├── button.tv.ts
│   │   │       ├── convertHistory.tv.ts
│   │   │       ├── displayMode.tv.ts
│   │   │       ├── errorList.tv.ts
│   │   │       ├── form
│   │   │       │   ├── errorList.ts
│   │   │       │   ├── inputFormButton.ts
│   │   │       │   └── textForm.ts
│   │   │       ├── formResetButton.tv.ts
│   │   │       └── inputForm.tv.ts
│   │   └── utils
│   │       ├── callApi.ts
│   │       └── schema.ts
│   └── vite.config.ts
└── README.md

<p align="right">(<a href="#top">トップへ</a>)</p>

## セットアップ

frontend

npm install
npm run dev

backend

pip install -r requirements.txt
python app.py

### 動作確認

http://localhost:5173/ にアクセスできるか確認
アクセスできたら成功

<p align="right">(<a href="#top">トップへ</a>)</p>
