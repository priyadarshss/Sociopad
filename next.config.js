/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'images.unsplash.com',
      'lh3.googleusercontent.com',
      'images.pexels.com',
    ],
  },
}

module.exports = nextConfig
