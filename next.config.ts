import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "ddc5jpwq7",
  },
};

export default nextConfig;
