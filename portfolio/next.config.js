const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')

module.exports = {
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        }
        return config
    },
    webpack (config, { isServer, dev }) {
        // We have to keep a list of extensions for the splitchunk config
        const fileExtensions = new Set()
        let extensions = [];
        for (const extension of extensions) {
            fileExtensions.add(extension)
        }

        if (!isServer) {
            config.optimization.splitChunks.cacheGroups.styles = {
            name: 'styles',
            test: new RegExp(`\\.+(${[...fileExtensions].join('|')})$`),
            chunks: 'all',
            enforce: true
            }
        }

        !isServer && config.plugins.push(
            new ExtractCssChunks({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: dev
                ? 'static/chunks/[name].css'
                : 'static/chunks/[name].[contenthash:8].css',
            chunkFilename: dev
                ? 'static/chunks/[name].chunk.css'
                : 'static/chunks/[name].[contenthash:8].chunk.css',
            hot: dev
            })
        )

        config.plugins.push(new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'static/chunks/[name].css',
            chunkFilename: 'static/chunks/[name].css',
        }));

        config.module.rules.push(
            {
                test: /\.css$/,
                use: [
                    !isServer && ExtractCssChunks.loader,
                    {
                        loader: 'css-loader',
                        options: 
                          {
                            onlyLocals: isServer
                          }
                    }
                ].filter(Boolean)
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        );

        return {...config, ...{
                entry: () => {
                    return config.entry().then((entry) => {
                    return Object.assign({}, entry, { styles: './assets/styles/app.scss' })
                    })
                }
            }
        };
      }
};
