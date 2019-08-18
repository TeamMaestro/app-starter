import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Typography|Heading', module)
    .addDecorator(withKnobs)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Heading 1', () => ({
        template: `
            <hive-ui-heading xxlarge color="blue">THE QUICK BROWN FOX JUMPS ...</hive-ui-heading>
        `
    }))
    .add('Heading 2', () => ({
        template: `
            <hive-ui-heading xlarge>Heading 2</hive-ui-heading>
        `
    }))
    .add('Heading 3', () => ({
        template: `
            <hive-ui-heading large>Heading 3</hive-ui-heading>
        `
    }))
    .add('Heading 4', () => ({
        template: `
            <hive-ui-heading base>Heading 4</hive-ui-heading>
            <hive-ui-heading base color="blue">Heading 4</hive-ui-heading>
        `
    }))
    .add('Heading 5', () => ({
        template: `
            <hive-ui-heading small>Heading 5</hive-ui-heading>
            <hive-ui-heading small color="blue">Heading 5</hive-ui-heading>
        `
    }))
    .add('Heading 6', () => ({
        template: `
            <hive-ui-heading xsmall>Heading 6</hive-ui-heading>
            <hive-ui-heading xsmall color="blue">Heading 6</hive-ui-heading>
            <hive-ui-heading xsmall color="red">Heading 6</hive-ui-heading>
        `
    }));
