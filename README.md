# forTest-angular

## version
Angular CLI: 13.3.4  
Node: 14.15.4  
Package Manager: npm 6.14.10  
OS: darwin x64  

Angular: 13.3.5  

@angular-devkit/architect       0.1303.4  
@angular-devkit/build-angular   13.3.4  
@angular-devkit/core            13.3.4  
@angular-devkit/schematics      13.3.4  
@angular/cli                    13.3.4  
@schematics/angular             13.3.4  
rxjs                            7.5.5  
typescript                      4.6.4  

https://www.wantedly.com/companies/logical-studio/post_articles/283090
ブラウザ間のデフォルトを打ち消す。
読み込む順番は最初。
npm install --save reset-css
```

"build": {"options": {"styles": [] に以下を追加
"test": {"options": {"styles": [] にも以下を追加

一番最初に読み込むように先頭に追加する

```
"./node_modules/reset-css/reset.css",
```

API  
java:springboot  
javaSDKをhomebrewでインストール
https://android.benigumo.com/20211202/mac-homebrew-openjdk11/

ngx-translate:多言語化  
postman:API試すアプリ、restAPIに類似  

webpackやd.ts（型定義ファイル）は内蔵されてる？
