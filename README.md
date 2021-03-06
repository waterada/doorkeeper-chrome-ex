doorkeeper-chrome-ex
=====================

- Doorkeeper 用の自己紹介で使う Chrome 拡張です。PHP勉強会で使っているものです。
- Doorkeeper のイベントページを表示するとページ下部にアイコンを拡大させたリストが作成されます。


拡張機能の更新手順(開発側)
---------------------------

1. `src/manifest.json` の `version` をインクリメントする(たとえば `1.4`)。
2. `src/` の中を更新する。
3. 拡張機能( `chrome://extensions` )の画面で『デベロッパーモード』をONにする。
4. 対象の拡張機能の `有効にする` を OFF にする。
5. 拡張機能の `パッケージ化されていない拡張機能を読み込む...` ボタンで `src` のディレクトリを選択する。
6. これで拡張機能が読み込まれるので画面でテストする。ソースを修正したら `リロード (Ctrl + R)` のリンクをクリックすることで、拡張機能が最新に更新される。
7. 問題なければ commit して github に push。
8. `src` ディレクトリを圧縮して `src.zip` を作る。
9. 拡張機能の画面で、開発用の拡張機能は削除して、元の拡張機能の `有効にする` をONにする。
10. 拡張機能の画面で `デベロッパーモード` をOFFにする。
11. google chrome の デベロッパー・ダッシュボードを表示: https://chrome.google.com/webstore/developer/dashboard
12. 「編集する」をクリックし、「更新パッケージをアップロード」ボタンでアップロード画面に進み、 `src.zip` ファイルをアップロードする。
13. 「変更を公開」ボタンを押す。
14. Chrome を再起動してバージョンがあがったことを確認する。


インストール方法
-----------------

1. Google Chrome を開く。
2. https://chrome.google.com/webstore/detail/redmine-extension-for-gmo/cncopmaajfkdihcmkalbffgpmbaiaejl
にアクセスして追加する。


機能
-----

### 今実装している機能：

- イベントページの画面下に、名前、拡大アバター、登録済みソーシャルアイコンとそこでの名前の一覧を生成する（ためのボタンがある）。

上記では、参加者全員が表示されないという問題があったが、下記なら解決できる。

- 参加者管理ページの画面上に、メンバー一覧に飛ぶボタンを出す。これを押してメンバー一覧に行くと、さらに画面上部にボタンがあるので、これを押せば、全員が表示される。

### 今後実装していきたい機能や課題：

1. 【やりたい】スクレイピングでユーザの活動を拾う。
2. 【やりたい】github で自己紹介ぺージを書いて置ける。
3. 【運用で回避：課題】アバターは遅延ロードされているので、ロード完了前にボタンを押すと、ただしくページが作れない。
4. 【解決：課題】「+ 3人の参加者」のように非表示のメンバー情報を別途拾う必要あり。
5. 【解決：課題】トップページのメンバーには未チェックインの人も混ざっている。
6. 【やりたい】自己紹介済みかどうかが判るようにトグルで背景色変えてブラウザ内DBに保存するとか。
7. 【課題】github のアバターだけは引数でサイズ渡せるので、拡大時に綺麗な画像にできますが、facebook > github > twitter という優先順位でアバター取りに行かれてしまうので、facebook も登録していると綺麗にならない。。。
