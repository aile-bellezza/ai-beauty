# サイト更新ガイド 📝

このガイドでは、サイトのコンテンツを簡単に更新する方法を説明します。

---

## 1. 投稿数を更新する

`data/content.json` を開いて、`posts` の値を変更するだけ！

```json
{
  "stats": {
    "posts": "150+"  ← ここを変更
  },
  ...
}
```

---

## 2. ギャラリー画像を追加する

### ステップ1: 画像を追加
新しい画像を `images/` フォルダに保存します。
例: `images/gallery-7.png`

### ステップ2: JSONを編集
`data/content.json` を開いて、galleryに新しい画像を追加：

```json
{
  "gallery": [
    {
      "image": "images/gallery-1.png",
      "title": "Sunset Paradise"
    },
    {
      "image": "images/gallery-7.png",  ← 新しく追加
      "title": "New Artwork"
    }
  ]
}
```

---

## 3. ギャラリー画像を削除する

削除したい画像の行を消すだけ！

**削除前:**
```json
{
  "image": "images/gallery-2.png",
  "title": "Cocktail Night"
},
```

**削除後:** （この部分を丸ごと消す）

---

## 現在のファイル構成

```
ai-beauty/
├── data/
│   └── content.json  ← これを編集！
├── images/
│   ├── gallery-1.png
│   ├── gallery-2.png
│   └── ...（ここに画像を追加）
├── index.html
├── script.js
└── styles.css
```

---

## 注意点

- JSONファイルは**カンマ(,)の位置**に注意！ 最後の項目にはカンマを付けない
- 画像ファイル名に**日本語やスペース**は避ける（英数字とハイフンのみ推奨）
- 変更後はブラウザを**リロード**して確認
