// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig


module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/api",
        destination: "http://localhost:4000",
      }
    ];
  };
  return {
    rewrites,
  };
};
