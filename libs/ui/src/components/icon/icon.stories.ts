import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

function importAll(r: __WebpackModuleApi.RequireContext): string[] {
    return r.keys().map(r) as string[];
}
const Icons = importAll(require.context('./icons', true, /\.(svg)$/)).map(iconPath => {
    iconPath = iconPath.substring(iconPath.lastIndexOf('/') + 1, iconPath.lastIndexOf('.'));
    iconPath = iconPath.substring(0, iconPath.lastIndexOf('.'));
    return iconPath;
});

Icons.forEach((icon: string) => {
    storiesOf(`Icons|${icon}`, module)
        .addParameters({
            notes: {
                markdown: readme
            }
        })
        .add('default', () => ({
            template: `
                <hive-ui-icon name="${icon}"></hive-ui-icon>
            `}
        ));
});
