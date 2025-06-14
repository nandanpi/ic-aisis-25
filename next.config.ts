import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dqtyllykk/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "nitte.edu.in",
        port: "",
      },
    ],
  },
};

export default nextConfig;
