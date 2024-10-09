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
        hostname: "reqres.in",
        port: "",
        pathname: "/img/faces/**",
      },
      {
        protocol: "https",
        hostname: "www.static-src.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
