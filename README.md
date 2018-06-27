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