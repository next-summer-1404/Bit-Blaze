import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.c2.liara.space',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
