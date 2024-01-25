/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.dicebear.com',
          },
          {
            protocol: 'https',
            hostname: 'placehold.co',
          },
        ],
      },
};

export default nextConfig;
