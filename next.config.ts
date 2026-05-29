import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
const assetBaseUrl = process.env.NEXT_PUBLIC_ASSET_URL?.replace(/\/$/, "");

const nextConfig: NextConfig = {
  reactStrictMode: true,

  turbopack: {},

  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    qualities: [75],
    deviceSizes: [640, 1080, 1920],
    imageSizes: [64, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'panel.hotres.pl',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.rivazegrzeapartamenty.pl',
        pathname: '/**',
      },
    ],
  },

  compress: true,

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          {
            key: 'Link',
            value: '<https://panel.hotres.pl>; rel=preconnect; crossorigin, <https://ajax.googleapis.com>; rel=preconnect; crossorigin',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/videos/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  async redirects() {
    return [
      ...(assetBaseUrl
        ? [
            { source: "/images/:path*", destination: `${assetBaseUrl}/:path*`, permanent: false },
            { source: "/videos/:path*", destination: `${assetBaseUrl}/videos/:path*`, permanent: false },
          ]
        : []),
      { source: "/about", destination: "/o-nas", permanent: true },
      { source: "/rooms", destination: "/apartamenty", permanent: true },
      { source: "/activities", destination: "/aktywnosci", permanent: true },
      { source: "/contact", destination: "/kontakt", permanent: true },
    ];
  },

  experimental: {
    optimizePackageImports: ['gsap', 'lucide-react'],
  },

  productionBrowserSourceMaps: false,

  poweredByHeader: false,
};

export default withNextIntl(nextConfig);