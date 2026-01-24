import { basePath } from '@/constants/const';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  sassOptions: {
    additionalData: `@use '@/styles/abstracts' as *;`,
  },
};

export default nextConfig;