import { centered } from '@storybook/addon-centered/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Form|Checkbox', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <hive-ui-checkbox></hive-ui-checkbox>
        `
    }))
    .add('Checked', () => ({
        template: `
            <hive-ui-checkbox [checked]="true"></hive-ui-checkbox>
        `
    }))
    .add('Small', () => ({
        template: `
            <hive-ui-checkbox small [checked]="true"></hive-ui-checkbox>
        `
    }))
    .add('Small Checked', () => ({
        template: `
            <hive-ui-checkbox small [checked]="true"></hive-ui-checkbox>
        `
    }));
