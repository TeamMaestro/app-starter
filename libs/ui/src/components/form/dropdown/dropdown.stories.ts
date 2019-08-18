import { centered } from '@storybook/addon-centered/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Form|Dropdown', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <hive-ui-dropdown>
                <hive-ui-button type="link" bold small>Upload CSV</hive-ui-button>
            </hive-ui-dropdown>
        `
    }))
    .add('Icon', () => ({
        template: `
            <hive-ui-dropdown>
                <hive-ui-button type="link" bold small>
                    Upload CSV
                </hive-ui-button>
                <hive-ui-icon color="medium-gray" name="tooltip"></hive-ui-icon>
            </hive-ui-dropdown>
        `
    }));
