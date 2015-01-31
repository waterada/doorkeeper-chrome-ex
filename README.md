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


```
