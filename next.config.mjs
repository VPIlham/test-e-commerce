const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.static-src.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
