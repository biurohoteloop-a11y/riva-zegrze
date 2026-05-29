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
            // --- GALERIA: w R2 podfoldery leza BEZ prefiksu "gallery/", wiec go obcinamy ---
            { source: "/images/gallery/aktywnosci/:path*", destination: `${assetBaseUrl}/aktywnosci/:path*`, permanent: false },
            { source: "/images/gallery/apartamenty/:path*", destination: `${assetBaseUrl}/apartamenty/:path*`, permanent: false },
            { source: "/images/gallery/apartments/:path*", destination: `${assetBaseUrl}/apartments/:path*`, permanent: false },
            { source: "/images/gallery/baner-galeria/:path*", destination: `${assetBaseUrl}/baner-galeria/:path*`, permanent: false },
            { source: "/images/gallery/baner-kontakt/:path*", destination: `${assetBaseUrl}/baner-kontakt/:path*`, permanent: false },
            { source: "/images/gallery/baner-pokoje/:path*", destination: `${assetBaseUrl}/baner-pokoje/:path*`, permanent: false },
            { source: "/images/gallery/okolica/:path*", destination: `${assetBaseUrl}/okolica/:path*`, permanent: false },
            { source: "/images/gallery/silownia/:path*", destination: `${assetBaseUrl}/silownia/:path*`, permanent: false },
            { source: "/images/gallery/wszystkie/:path*", destination: `${assetBaseUrl}/wszystkie/:path*`, permanent: false },
            // --- Foldery, ktore w R2 sa 1:1 (zostawiamy nazwe) ---
            { source: "/images/about/:path*", destination: `${assetBaseUrl}/about/:path*`, permanent: false },
            { source: "/images/experience/:path*", destination: `${assetBaseUrl}/experience/:path*`, permanent: false },
            { source: "/images/hero/:path*", destination: `${assetBaseUrl}/hero/:path*`, permanent: false },
            { source: "/images/instagram/:path*", destination: `${assetBaseUrl}/instagram/:path*`, permanent: false },
            { source: "/images/rooms/:path*", destination: `${assetBaseUrl}/rooms/:path*`, permanent: false },
            { source: "/images/wellness/:path*", destination: `${assetBaseUrl}/wellness/:path*`, permanent: false },
            // --- WIDEO ---
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
