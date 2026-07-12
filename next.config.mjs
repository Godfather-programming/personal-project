/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/personal-project" : "",
  assetPrefix: isProd ? "/personal-project/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;










// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
// };

// export default nextConfig;
