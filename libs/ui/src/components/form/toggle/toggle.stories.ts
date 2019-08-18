import { centered } from '@storybook/addon-centered/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Form|Toggle', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <hive-ui-toggle></hive-ui-toggle>
        `
    }))
    .add('With Text', () => ({
        template: `
            <hive-ui-toggle>
                <hive-ui-heading medium small>WITH LABEL</hive-ui-heading>
            </hive-ui-toggle>
        `
    }));
