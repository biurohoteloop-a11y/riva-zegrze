import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // ✅ Strict Mode
  reactStrictMode: true,

  // ✅ Turbopack (pusta konfiguracja wyłącza warning)
  turbopack: {},

  // ✅ Optymalizacja obrazów
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85], // ← DODANE
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'panel.hotres.pl',
        pathname: '/**',
      },
    ],
  },

  // ✅ Kompresja
  compress: true,

  // ✅ Headers dla performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Link',
            value: '<https://panel.hotres.pl>; rel=preconnect; crossorigin, <https://ajax.googleapis.com>; rel=preconnect; crossorigin',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // ✅ Redirecty
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/o-nas",
        permanent: true,
      },
      {
        source: "/rooms",
        destination: "/apartamenty",
        permanent: true,
      },
      {
        source: "/activities",
        destination: "/aktywnosci",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/kontakt",
        permanent: true,
      },
    ];
  },

  // ✅ Experimental
  experimental: {
    optimizePackageImports: ['gsap', 'lucide-react'],
  },

  // ✅ Bez source maps w produkcji
  productionBrowserSourceMaps: false,

  // ✅ Ukryj header
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
