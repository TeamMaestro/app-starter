import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Typography|Label', module)
    .addDecorator(withKnobs)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Body/Georgia/Normal/Left', () => ({
        template: `
            <hive-ui-label>The quick brown fox jumps over the lazy dog.</hive-ui-label>
        `
    }))
    .add('Body/Georgia/small/Left', () => ({
        template: `
            <hive-ui-label small>The quick brown fox jumps over the lazy dog.</hive-ui-label>
        `
    }))
    .add('subtext/Georgia/right/blue', () => ({
        template: `
            <hive-ui-label color="blue">The quick brown fox jumps over the lazy dog.</hive-ui-label>
        `
    }))
    .add('Capitalize', () => ({
        template: `
            <hive-ui-label capitalize>The quick brown fox jumps over the lazy dog.</hive-ui-label>
        `
    }))
    .add('Uppercase', () => ({
        template: `
            <hive-ui-label uppercase>The quick brown fox jumps over the lazy dog.</hive-ui-label>
        `
    }))
    .add('Lowercase', () => ({
        template: `
            <hive-ui-label lowercase>The quick brown fox jumps over the lazy dog.</hive-ui-label>
        `
    }));
