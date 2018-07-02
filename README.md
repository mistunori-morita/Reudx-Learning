# Reudx-Learning

## なんとなくwebpack使っていたのでいちからおさらい
- webpack.config.jsで積んだ
- とりあえずwebpack4のcliとかやってなんとかできた
- wepbakc-commandのやつで`wp --watch`とか使って動いたけど、ちょっと見づらいよ。。。

## Reduxのお勉強
- react/reduxのおさらいでぽちぽちって感じ
- とりえあえず基礎的なものぽちぽち

## 結論
- やっぱり`create-react-app xxx`が便利だね！笑


## Reactで出てくるjsのメソッドのmemo
- findIndex()
```
配列から条件を満たす要素のインデックス番号を取得するメソッド。
前方から後方にかけて検索し、条件を満たす一番最初の要素だけが返ります。条件を満たす要素が1つもない場合、undefinedが返ります。なお、find()は、値ではなく、インデックス番号が返ります。
```

- slice()
```
文字列や配列などからデータの一部分だけ取り出せるメソッド
slice()は「文字列型（String）」「配列型（Array）」の両方にそれぞれ用意されている.


var str = 'あおあかきいろ';
//開始位置を3文字目に指定
var text = str.slice( 3 );
 
console.log( text );
実行結果
かきいろ

[slice( 2, 4 )」と記述したら、切り抜く文字は2文字目と３文字目だけ]

```

## Redux Middleware
- Reduxのflow
1. Store
2. Provider
3. Actions
4. Middleware
5. Reducers

- `yarn add redux-logger` (npmでもok)
```js
import logger from 'redux-logger'
//applyMiddlewareを追加
import {createStore,applyMiddleware} from 'redux'

//midllewareを使えるようにしてstoreに紐づける
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);
```
- こうするとログに出てくるのでみやすい


## webpackこけたら
- https://qiita.com/mimikun/items/860bad42c9b5bd10c7f4
- webpack4からwebpackコマンドは別パッケージになったから変更必要
```js

//webpack.config.js
const path = require('path');
 
module.exports = {
  // 出力元（エントリーポイント）
  entry: './src/app.js',
  // 出力先の設定
  output:  {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス
    path: path.resolve(__dirname, 'public')
  },
  // sourcemap を使用するか否か
  devtool: 'source-map',
  // ローカル開発用環境の設定
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8081
  },
  // 使用するモジュール
  module: {
    // 使用するモジュールの設定をオブジェクトの配列で設定する
    rules: [
      {
        // 対象となる拡張子
        test: /\.js$/,
        // 除外するディレクトリ
        exclude: /node_modules/,
        // 使用する loader をオブジェクトの配列で記載
        use: [
          {
              // loader は babel-loader を使用する
            loader: 'babel-loader',
            options: {
              // presets は babel-preset-env を使用する
              presets: ['env','react', 'stage-1']
            }
          }
        ]
      }
    ]
  }
}
```

```js
package.jsonに記述をしてwebpack.config.jsを呼び出す

  "scripts": {
    "build": "webpack"
  },
```

```js
{
  "name": "reduxApp",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.4",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-1": "^6.24.1",
    "express": "^4.16.3",
    "react": "^16.4.1",
    "react-dom": "^16.4.1",
    "react-redux": "^5.0.7",
    "react-router": "^4.3.1",
    "redux": "^4.0.0",
    "redux-logger": "^3.0.6",
    "webpack": "^4.12.2",
    "webpack-cli": "^3.0.8",
    "webpack-command": "^0.3.1"
  },
  "devDependencies": {},
  //これのこと
  "scripts": {
    "build": "webpack"
  }
}

```
- これでpacage.jsonに記述したので`npm(yarn) run build`で起動できる
- 今回のやつは`node server.js`も起動しないといけない（この辺webpackで修正のちほどかけよう）