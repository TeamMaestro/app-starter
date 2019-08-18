import { centered } from '@storybook/addon-centered/angular';
import { number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Form|Progress Ring', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <div style="background-color:#009CDE;">
                <hive-ui-progress-ring [stroke]="stroke" [radius]="radius" [progress]="progress"></hive-ui-progress-ring>
            </div>
        `,
        props: {
            stroke: number('stroke', 4),
            radius: number('radius', 60),
            progress: number('progress', 20)
        }
    }));
