import { centered } from '@storybook/addon-centered/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Form|Alert', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <hive-ui-alert>Default</hive-ui-alert>
        `
    }))
    .add('Red', () => ({
        template: `
            <hive-ui-alert color="red">This is an example alert.</hive-ui-alert>
        `
    }));
