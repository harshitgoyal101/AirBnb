/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig; 