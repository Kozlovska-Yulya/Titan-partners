import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false, // Отключает .map файлы в production
};

export default nextConfig;
