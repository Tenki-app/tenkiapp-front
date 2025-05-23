/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["en", "es"],
		defaultLocale: "en",
	},
	images: {
		remotePatterns: [{
			protocol: 'https',
			hostname: 'lh3.googleusercontent.com',
			port: '',
			pathname: '/a/**'
		}]
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: /\.[jt]sx?$/,
			use: [{ loader: "@svgr/webpack", options: { icon: true } }],
		});
		return config;
	},
};

module.exports = nextConfig;
