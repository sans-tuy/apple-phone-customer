/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.daisyui.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "cdnpro.eraspace.com",
        port: "",
        pathname: "/media/catalog/product/**",
      },
    ],
  },
};

export default nextConfig;
