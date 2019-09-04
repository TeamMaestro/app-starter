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
const css = require('css');
const webpack = require('webpack');

let jsFilePath: string;
let cssFilePath: string;
let cssGlobalFilePath: string;

const uiDistPath = 'libs/ui/dist';

interface ParsedCSS {
    stylesheet: {
        rules: {
            type: string;
            declarations: {
                property: string;
                value: string;
            }[];
        }[];
    };
}

function getFontFaces(fontFaceCss: string) {
    const cssObject = css.parse(
        fontFaceCss,
        path.join(__dirname, `../libs/ui/fonts/font.css`)
    ) as ParsedCSS;
    return cssObject.stylesheet.rules
        .filter(rule => rule.type === 'font-face')
        .map(rule => {
            const fontFace = rule.declarations.reduce(
                (obj, item) => ((obj[item.property] = item.value), obj),
                {}
            ) as any;
            return {
                // tslint:disable-next-line:no-eval
                family: eval(fontFace['font-family']),
                // tslint:disable-next-line:no-eval
                source: eval(/\(([^)]+)\)/.exec(fontFace.src)[1]),
                descriptors: {
                    style: fontFace['font-style'],
                    weight: fontFace['font-weight']
                }
            };
        });
}

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

    cssGlobalFilePath = path.join(__dirname, `../${uiDistPath}/hive/hive.css`);
    try {
        if (fs.existsSync(cssGlobalFilePath)) {
            config.entry.push(cssGlobalFilePath);
        }
    } catch (err) {
        console.error(err);
    }

    const fontStylesheet = fs.readFileSync(
        path.join(__dirname, `../libs/ui/fonts/font.css`),
        'utf8'
    );

    config.plugins.push(
        new CopyPlugin([
            {
                from: 'hive.css',
                to: './',
                context: `${uiDistPath}/hive`
            },
            {
                from: '**/*',
                to: './fonts',
                context: `libs/ui/fonts`
            }
        ])
    );

    if (process.env.STORYBOOK_DSM) {
        config.entry.push(
            path.join(__dirname, 'dsm-helpers/dsm-asset-helper.js')
        );
        config.entry.push(
            path.join(__dirname, 'dsm-helpers/dsm-font-loader.js')
        );
        config.plugins.push(
            new webpack.DefinePlugin({
                DSM_FONT_CONFIG: JSON.stringify(getFontFaces(fontStylesheet))
            })
        );
    }

    config.plugins.push(new WriteFilePlugin());

    return config;
};
