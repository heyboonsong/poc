const NextFederationPlugin = require("@module-federation/nextjs-mf");

const homeUrl = process.env.HOME_URL || `http://localhost:3020`;
const marketUrl = process.env.MARKET_URL || `http://localhost:3021`;
const cafeUrl = process.env.MARKET_URL || `http://localhost:3022`;
const tradeUrl = process.env.MARKET_URL || `http://localhost:3023`;

// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    home: `home@${homeUrl}/_next/static/${location}/remoteEntry.js`,
    market: `market@${marketUrl}/_next/static/${location}/remoteEntry.js`,
    cafe: `cafe@${cafeUrl}/_next/static/${location}/remoteEntry.js`,
    trade: `trade@${tradeUrl}/_next/static/${location}/remoteEntry.js`,
  };
};

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        filename: "static/chunks/remoteEntry.js",
        exposes: {},
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );

    return config;
  },
};
