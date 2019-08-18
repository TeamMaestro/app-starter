import { centered } from '@storybook/addon-centered/angular';
import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

// When using knobs with stencil components, you must manually bind them.
storiesOf('Form| Checklist', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <hive-ui-checklist
                [items]="items"
            ></hive-ui-checklist>
        `,
        props: {
            items: object('items', [
                {
                    text: 'ITEM WITH BADGE',
                    value: 'id-1',
                    badge: true,
                    badgeNumber: 2
                },
                {
                    text: 'ITEM ',
                    value: 'id-2'
                },
                {
                    text: 'ITEM ',
                    value: 'id-3'
                }
            ]),
            defaultItem: object('defaultItem', {
                text: 'OTHER (select if you do not see your organization)',
                value: 'other'
            })
        }
    }));
