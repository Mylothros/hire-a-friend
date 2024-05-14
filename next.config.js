/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // }
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}
 
module.exports = nextConfig