/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // 静的エクスポートを有効化（オプション）
  // output: 'export',

  // 画像最適化の設定
  images: {
    domains: ['images.microcms-assets.io'],
    unoptimized: false,
  },

  // 環境変数
  env: {
    SITE_URL: process.env.SITE_URL || 'https://www.kensetsu-tech.com',
    SITE_NAME: 'union | 株式会社main character',
  },

  // ヘッダーのセキュリティ設定
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
    ];
  },
}

module.exports = nextConfig
