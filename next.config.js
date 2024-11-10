// import type { NextConfig } from "next";
 /** @types {import('next').NextConfig}  */


 const nextConfig = {
   esLint: {
    ignoreDuringBuilds: true,
   },
 /* config options here */
 };

// export default nextConfig;
module.exports = nextConfig;
module.exports = { reactStrictMode: true, 
  // Any other configuration options you might have
};