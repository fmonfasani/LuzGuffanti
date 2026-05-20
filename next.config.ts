import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "ddc5jpwq7",
  },
};

export default nextConfig;
