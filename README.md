# ローカル実行

`yarn`  
`yarn start`

すると、 localhost:3001 にて動作します

# ビルド

`yarn run build/${dev | stg | prd}`

js を `dist/main.js` にビルドしてくれます

# リリース

dist 配下を firebase hosting にリリースする。

## 準備

まず該当のアカウントで firebase にログインする。  
`firebase -P $(PROJECT_ID) login --reauth`

## デプロイ

`firebase deploy -P ${firebase project id} --only hosting`

## target の指定

1. (まだ target を作っていない場合)console 画面で、手動でサブドメインを登録する
2. (まだ target を作っていない場合)TARGET_NAME を自由に考えてきめる
3. `firebase -P ${firebase project id} target:apply hosting ${TARGET_NAME} ${SUB_DOMAIN}`

## デプロイ

`firebase deploy -P ${firebase project id} --only hosting:${TARGET_NAME}`

## 確認

https://${SUB_DOMAIN}.firebaseapp.com/  
へアクセス。
