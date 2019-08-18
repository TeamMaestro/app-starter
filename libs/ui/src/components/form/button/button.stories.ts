import { centered } from '@storybook/addon-centered/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Form|Button', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <hive-ui-button>Default</hive-ui-button>
        `
    }))
    .add('Default/Disabled', () => ({
        template: `
            <hive-ui-button disabled>Disabled</hive-ui-button>
        `
    }))
    .add('Green', () => ({
        template: `
            <hive-ui-button color="medium-green">Green</hive-ui-button>
        `
    }))
    .add('Green/Disabled', () => ({
        template: `
            <hive-ui-button color="medium-green" disabled>Disabled</hive-ui-button>
        `
    }))
    .add('White', () => ({
        template: `
            <hive-ui-button color="white">White</hive-ui-button>
        `
    }))
    .add('White/Disabled', () => ({
        template: `
            <hive-ui-button color="white" disabled>Disabled</hive-ui-button>
        `
    }))
    .add('Link/Default', () => ({
        template: `
            <hive-ui-button type="link">Default</hive-ui-button>
        `
    }))
    .add('Menu', () => ({
        template: `
            <hive-ui-button color="white" type="menu">
                <hive-ui-icon color="medium-gray" name="dropdown"></hive-ui-icon>
            </hive-ui-button>
        `
    }));
