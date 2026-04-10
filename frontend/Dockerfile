FROM node:22-alpine

WORKDIR /app

# 依存関係を先にコピー（キャッシュ活用）
COPY package.json package-lock.json ./
RUN npm ci

# ソースコードをコピー
COPY . .

EXPOSE 5173

# Vite devサーバーを 0.0.0.0 でリッスン（コンテナ外からアクセス可能にする）
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
