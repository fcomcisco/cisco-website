/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/cisco-website" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig