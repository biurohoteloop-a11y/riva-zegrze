import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
