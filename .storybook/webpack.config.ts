/**
 * Source:
 * https://github.com/MadnessLabs/enjin-components/
 * https://github.com/MadnessLabs/enjin-components/blob/04dd0c987a92011d2c80f0e730d7d4f350acb331/.storybook/webpack.config.js
 *
 * Modified to work with this project structure to achieve Stencil automatic reload.
 */

const fs = require('fs');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

let jsFilePath: string;
let cssFilePath: string;
let cssFontFilePath: string;

const uiDistPath = 'libs/ui/dist';

module.exports = async ({ config }) => {
    fs.readdirSync(
        path.join(__dirname, `../${uiDistPath}/collection/components`)
    ).map((file: string) => {
        jsFilePath = path.join(
            __dirname,
            `../${uiDistPath}/collection/components/${file}/${file}.js`
        );
        try {
            if (fs.existsSync(jsFilePath)) {
                config.entry.push(jsFilePath);
            }
        } catch (err) {
            console.error(err);
        }

        cssFilePath = path.join(
            __dirname,
            `../${uiDistPath}/collection/components/${file}/${file}.css`
        );
        try {
            if (fs.existsSync(cssFilePath)) {
                config.entry.push(cssFilePath);
            }
        } catch (err) {
            console.error(err);
        }
    });

    config.plugins.push(
        new CopyPlugin([
            {
                from: '**/*',
                to: './',
                context: uiDistPath
            }
        ])
    );

    config.plugins.push(new WriteFilePlugin());

    return config;
};
