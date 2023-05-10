/** @type {import("next").NextConfig} */
const path = require("path")


module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
}


const nextConfig = {
	// reactStrictMode: true,
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_SERVER_URL,
	},
	experimental: {
		appDir: true,
	},
}

module.exports = nextConfig

