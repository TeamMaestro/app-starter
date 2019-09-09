import {
    configure,
    addDecorator,
    moduleMetadata,
    addParameters
} from '@storybook/angular';
import {
    initDsm
} from '@invisionapp/dsm-storybook';
import {
    CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import '@storybook/addon-console';
import {
    setConsoleOptions
} from '@storybook/addon-console';

setConsoleOptions({
    panelExclude: [],
});

addDecorator(
    moduleMetadata({
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
);

import theme from './theme';

addParameters({
    options: {
        theme
    }
});

function loadStories() {
    const paths = [
        require.context('../apps/web', true, /\.stories\.ts$/),
        require.context('../apps/native', true, /\.stories\.ts$/),
        require.context('../libs/ui', true, /\.stories\.ts$/)
    ];
    paths.forEach(req => {
        req.keys().forEach(filename => req(filename));
    });

    require('../libs/ui/loader/index.cjs.js').defineCustomElements(window);
    require('@ionic/core/loader/index.cjs.js').defineCustomElements(window);
}

if (process.env.STORYBOOK_DSM) {
    initDsm({
        addDecorator,
        addParameters,
        callback: () => configure(loadStories, module)
    });
} else {
    configure(loadStories, module);
}
