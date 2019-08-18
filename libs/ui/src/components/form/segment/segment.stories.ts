import { centered } from '@storybook/addon-centered/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Form|Segment', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <hive-ui-segment>
                <hive-ui-segment-button checked>Training</hive-ui-segment-button>
                <hive-ui-segment-button>Details</hive-ui-segment-button>
            </hive-ui-segment>
        `
    }));
