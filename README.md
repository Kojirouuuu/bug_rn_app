# BugBook - 私の昆虫図鑑

昆虫の発見を記録、カタログ化するための Expo で構築された包括的な React Native アプリです。写真、詳細な観察結果、位置データを使って、あなただけのフィールドガイドを作成しましょう。

## 🚀 特徴

### コア機能

- **📸 写真撮影とインポート**: カメラで写真を撮ったり、ギャラリーからインポートしたりできます
- **📝 豊富なエントリー作成**: 種名、一般名、科、場所、詳細なメモを記録できます
- **🔍 スマートギャラリー**: 検索とフィルタリング機能を備えたグリッドとリストビュー
- **📍 位置追跡**: 自動位置検出とリバースジオコーディング
- **💾 オフラインサポート**: ローカルストレージ用の SQLite データベースとクラウド同期機能
- **🎨 美しい UI**: ダークモードをサポートしたマテリアル 3 デザイン
- **☁️ クラウド同期**: AWS Amplify と GraphQL を使用したリアルタイム同期

## 🛠 技術スタック

### フロントエンド

- **フレームワーク**: React Native with Expo SDK 53
- **ナビゲーション**: Expo Router（型付きルート）
- **状態管理**: Zustand（永続化機能付き）
- **UI コンポーネント**: Lucide React Native アイコンを使用したカスタムコンポーネント
- **アニメーション**: React Native Reanimated

### バックエンド & データ

- **ローカルデータベース**: SQLite（expo-sqlite）
- **クラウドバックエンド**: AWS Amplify
- **GraphQL API**: AWS AppSync
- **認証**: AWS Cognito
- **ストレージ**: AWS S3（画像保存）
- **リアルタイム**: GraphQL Subscriptions

### 外部サービス

- **画像処理**: Expo Camera, Expo Image Manipulator
- **位置情報**: Expo Location
- **ストレージ**: AsyncStorage（永続化のため）
- **ネットワーク**: React Query（キャッシング）

## 📱 インストール

### 前提条件

- [Node.js](https://nodejs.org/) (推奨版)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) (モバイルアプリ)

### セットアップ手順

1. **リポジトリのクローン**

   ```bash
   git clone https://github.com/kojirouuuu/bug_rn_app.git
   cd bug_rn_app
   ```

2. **依存関係のインストール**

   ```bash
   npm install
   ```

3. **AWS Amplify の設定**

   ```bash
   # Amplify CLIのインストール（初回のみ）
   npm install -g @aws-amplify/cli

   # Amplifyプロジェクトの初期化
   amplify init

   # バックエンドリソースのプッシュ
   amplify push
   ```

4. **環境変数の設定**

   ```bash
   # .envファイルを作成（必要に応じて）
   cp .env.example .env
   ```

5. **開発サーバーの起動**

   ```bash
   npm run dev
   ```

6. **デバイス/シミュレーターでの実行**
   - ターミナルに表示された QR コードを、スマートフォンの Expo Go アプリでスキャンしてください
   - または、iOS Simulator/Android Emulator で実行

## 📁 プロジェクト構成

```
bug_rn_app/
├── app/                    # Expo Router スクリーン
│   ├── (tabs)/            # タブナビゲーション
│   │   ├── index.tsx      # ホーム画面
│   │   ├── camera.tsx     # カメラ画面
│   │   ├── gallery.tsx    # ギャラリー画面
│   │   └── profile.tsx    # プロフィール画面
│   ├── _layout.tsx        # ルートレイアウト
│   └── +not-found.tsx     # 404ページ
├── components/            # 再利用可能なコンポーネント
│   ├── InsectCard.tsx     # 昆虫表示カード
│   ├── StatsCard.tsx      # 統計カード
│   └── CreateEntryModal.tsx # エントリー作成モーダル
├── store/                 # 状態管理
│   └── insectStore.ts     # Zustandストア（永続化付き）
├── services/              # データベースサービス
│   └── database.ts        # SQLite操作
├── lib/                   # ユーティリティ
│   └── api.ts            # GraphQL API操作
├── src/                   # 生成されたコード
│   ├── API.ts            # Amplify生成のAPI型定義
│   └── graphql/          # GraphQLスキーマとオペレーション
├── hooks/                 # カスタムフック
│   └── useFrameworkReady.ts # フレームワーク初期化
├── amplify/               # AWS Amplify設定
│   ├── backend/          # バックエンド設定
│   └── team-provider-info.json # チーム設定
└── assets/               # 静的アセット
    └── images/           # 画像ファイル
```

## 🔧 開発

### 利用可能なスクリプト

```bash
# 開発サーバー起動
npm run dev

# Webビルド
npm run build:web
# TODO: web版のビルド時のエラーを解消する

# リント実行
npm run lint
```

### データベース操作

アプリは SQLite を使用してローカルデータを管理し、AWS Amplify を通じてクラウドと同期します：

- **ローカルストレージ**: SQLite（オフライン対応）
- **クラウド同期**: GraphQL API（AWS AppSync）
- **画像ストレージ**: AWS S3

- \*\* TODO: S3 へのパスの構造考える

### 状態管理

Zustand を使用した状態管理で、以下の機能を提供：

- 昆虫エントリーの CRUD 操作
- 検索・フィルタリング機能
- 統計情報の管理
- 永続化（AsyncStorage）

## 🌟 主要機能

### 1. 昆虫記録

- カメラ撮影またはギャラリーからの画像選択
- 種名、一般名、科の記録
- 位置情報の自動取得
- 天候、メモ、タグの追加

### 2. ギャラリー管理

- グリッド/リストビューの切り替え
- 検索機能（種名、場所、メモ）
- フィルタリング（科、場所、日付範囲）
- 統計情報の表示

### 3. クラウド同期

- リアルタイムデータ同期
- オフライン対応
- 画像の自動アップロード
- 複数デバイス間の同期

## 🚀 今後の拡張機能

### 計画中の機能

- **🤖 AI による種同定**: Vision API との連携による自動種認識
- **👥 ソーシャル共有**: 発見をコミュニティと共有
- **📊 高度な分析**: 詳細な統計とインサイト
- **📄 エクスポートオプション**: PDF フィールドガイド生成
- **🗺️ オフラインマップ**: オフライン位置追跡のためのキャッシュされたマップタイル

### 技術的な改善

- **🔔 プッシュ通知**: リマインダーと更新
- **🔄 バックグラウンド同期**: 自動クラウド同期
- **🖼️ 画像最適化**: 高度な圧縮とキャッシング
- **👁️ AR 機能**: 拡張現実による昆虫同定
- **🧠 機械学習**: ローカルでの種同定モデル

## 🤝 貢献

プロジェクトへの貢献を歓迎します！以下の手順で貢献してください：

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。

---

**BugBook** - あなたの昆虫探検を記録し、共有しましょう！ 🦋
