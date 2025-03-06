import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'harshitgoyal101.pythonanywhere.com',
        port: '',
        pathname: '/**'
      }
    ]    
  }
};

export default nextConfig;
