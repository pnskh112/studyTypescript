# studyTypescript

typescript 学習用

# tsc コマンド

tsc コマンドでトランスパイル実行できる
また、npx コマンドも実行できる

```
  npx tsc src/install-typescript.ts
```

ts-node ライブラリをいれれば、下記でトランスパイルと実行まで行ってくれる。

```
  npx ts-node src/install-typescript.ts
```

ts-node-dev らぶらりを入れれば、下記でホットリロードできる

```
  npx ts-node-dev --respawn src/install-typescript.ts
```

# npm TIPS

```
npm info xxx
npm install --save-dev xxx@x.x.x
```

```eslint
/* lintチェック */
npx eslint --fix src/allow-function.ts
/* 修正するとき */
npx eslint --fix src/allow-function.ts
```

# git TIPS

下記で、直前のブランチの情報を merge することができる

```
git switch main
git fetch
git merge -
```
