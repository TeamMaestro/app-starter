import { centered } from '@storybook/addon-centered/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Form|Form Alert', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <hive-ui-form-alert>Required fields missing</hive-ui-form-alert>
        `
    }));
