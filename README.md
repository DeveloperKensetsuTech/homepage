# 株式会社main character - union コーポレートサイト

## プロジェクト概要
- **プロジェクト名**: 株式会社main character コーポレートサイト
- **ブランド名**: union
- **目標**: 建設業界のDX化支援を通じた顧客獲得（月間10件の問い合わせ目標）
- **主要機能**: コーポレート情報発信、事例紹介、お問い合わせ受付

## 技術スタック
- **フレームワーク**: Next.js 14 + TypeScript
- **スタイリング**: CSS Modules / Global CSS
- **デプロイ**: Vercel / Cloudflare Pages / その他ホスティングサービス

## 実装済みページ

### ✅ メインページ
1. **トップページ** (`/`)
   - ヒーローセクション（メインメッセージ、CTA）
   - 選ばれる理由（3つの特徴）
   - 実績数字（統計表示）
   - 主要サービス紹介

2. **会社概要** (`/company`)
   - 会社情報（会社名、代表者、設立、所在地）
   - 事業内容
   - ミッション・ビジョン

3. **事例紹介** (`/cases`)
   - 6つの導入事例（A建設様〜F総合建設様）
   - カテゴリ別分類（アプリ開発、効率化支援、DXコンサル）
   - 課題・解決策・効果の明確な記載

4. **お問い合わせ** (`/contact`)
   - 詳細問い合わせフォーム（会社名、担当者、サービス、予算、時期等）
   - バリデーション機能
   - 送信成功・エラーハンドリング

### ✅ API機能
- **お問い合わせAPI** (`POST /api/contact`)
  - フォームバリデーション
  - メールアドレス検証
  - JSON形式レスポンス

### ✅ SEO・技術仕様
- メタタグ最適化（タイトル、説明、キーワード）
- Open Graph / Twitter Card対応
- 構造化データ（組織情報）実装
- Google Analytics設定済み
- クッキー同意バナー実装
- レスポンシブデザイン完全対応

## 開発環境のセットアップ

### 必要要件
- Node.js 18.0.0 以上
- npm または yarn

### インストール手順

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動（ポート3000）
npm run dev

# 本番ビルド
npm run build

# 本番サーバーの起動
npm start
```

### 開発サーバー
開発サーバー起動後、以下のURLでアクセスできます：
- **ローカル**: http://localhost:3000
- **トップページ**: http://localhost:3000/
- **会社概要**: http://localhost:3000/company
- **事例紹介**: http://localhost:3000/cases
- **お問い合わせ**: http://localhost:3000/contact

## プロジェクト構造

```
maincharacterinchp/
├── components/          # Reactコンポーネント
│   ├── Header.tsx      # ヘッダーコンポーネント
│   └── Footer.tsx      # フッターコンポーネント
├── pages/              # Next.jsページ
│   ├── _app.tsx        # アプリケーションルート
│   ├── _document.tsx   # HTMLドキュメント設定
│   ├── index.tsx       # トップページ
│   ├── company.tsx     # 会社概要
│   ├── cases.tsx       # 事例紹介
│   ├── contact.tsx     # お問い合わせ
│   └── api/            # APIルート
│       └── contact.ts  # お問い合わせAPI
├── styles/             # スタイルシート
│   └── globals.css     # グローバルCSS
├── public/             # 静的ファイル
├── next.config.js      # Next.js設定
├── tsconfig.json       # TypeScript設定
└── package.json        # プロジェクト依存関係

```

## データアーキテクチャ
- **フロントエンド**: Next.js 14 (React 18)
- **型安全性**: TypeScript
- **スタイリング**: CSS（カスタムプロパティベース）
- **API**: Next.js API Routes
- **デザインシステム**: カスタムCSS（青紫色ベース、テクノロジー感）

## デプロイメント

### Vercelへのデプロイ（推奨）
```bash
# Vercel CLIのインストール
npm i -g vercel

# デプロイ
vercel
```

### その他のプラットフォーム
- **Netlify**: `npm run build` の出力を `.next` ディレクトリから配信
- **Cloudflare Pages**: Next.js対応のビルド設定を使用
- **自前サーバー**: `npm run build && npm start` で起動

## 今後の推奨改善点

### 即座に実装可能
1. **Google Analytics ID設定**: 実際のGA IDに置換（_document.tsx内）
2. **連絡先情報更新**: 実際の電話番号設定
3. **ファビコン・ロゴ追加**: public/配下に配置
4. **お問い合わせメール送信**: 実際のメール送信機能（SendGrid、Resendなど）

### 中期的な拡張
1. **ブログ機能**: 週3回更新予定のコンテンツマーケティング
2. **詳細事例ページ**: 各導入事例の個別詳細ページ
3. **料金プラン表示**: サービス別の明確な料金体系
4. **顧客の声セクション**: 実際の顧客レビュー・推薦文
5. **プライバシーポリシー、利用規約、特定商取引法ページ**: 法的に必要なページの追加

### 長期的な発展
1. **多言語対応**: 英語版サイト（海外展開時）
2. **動画コンテンツ**: サービス説明動画、事例紹介動画
3. **資料ダウンロード**: 会社案内、サービス資料PDF
4. **オンライン見積もり**: 簡易見積もりシミュレーション

## 会社情報

**会社名**: 株式会社main character
**ブランド名**: union
**代表者**: 北島壮馬
**所在地**: 〒814-0001 福岡県福岡市早良区百道2-15-1
**Email**: info@kensetsu-tech.com
**営業時間**: 平日 9:00-18:00

---

© 2024 株式会社main character. All rights reserved.
