/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost'],
        unoptimized: true,
    },
    // Add this if you need to handle trailing slashes
    trailingSlash: false,
};

module.exports = nextConfig;