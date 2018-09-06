import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    namespace: 'ui-kit',
    outputTargets: [
        {
            type: 'dist'
        },
        {
            type: 'www',
            serviceWorker: null
        }
    ],
    plugins: [sass()],
    enableCache: true,
    globalStyle: 'src/global/variables.css',
    excludeSrc: ['/test/', '**/*.md', '**/.spec.']
};
