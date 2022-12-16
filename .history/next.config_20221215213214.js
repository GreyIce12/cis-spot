/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    largePageDataBytes: 800 * 1000,
  },
  images:{
    domains:["cis.ncu.edu.jm", "lh3.googleusercontent.com","www.looper.com","www.nicepng.com","avatars.dicebear.com"],
    content: [
      "./node_modules/flowbite/**/*.js"
  ]
  }
}

