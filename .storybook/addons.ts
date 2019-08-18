import '@storybook/addon-knobs/register';
import '@storybook/addon-notes/register';
import '@storybook/addon-viewport/register';

import { registerDsm } from '@invisionapp/dsm-storybook/register';

if (process.env.STORYBOOK_DSM) {
    registerDsm(process.env.STORYBOOK_DSM);
}
