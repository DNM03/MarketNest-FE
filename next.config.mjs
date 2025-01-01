/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "**", // Matches all paths
      },
      {
        protocol: "https",
        hostname: "images.everydayhealth.com",
        port: "",
        pathname: "**", // Matches all paths
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "**", // Matches all paths
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "**", // Matches all paths
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "**", // Matches all paths
      },
      {
        protocol: "https",
        hostname: "marketnest-api.onrender.com",
        port: "",
        pathname: "**", // Matches all paths
      },
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "**", // Matches all paths
      },
    ],
  },
};

export default nextConfig;
