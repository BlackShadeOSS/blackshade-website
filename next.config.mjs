/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/omegaspaceteam',
          destination: 'https://www.omegaspaceteam.tech',
          permanent: true, // returns 308 status code (permanent redirect)
        },
      ];
    },
  };
  

export default nextConfig;
