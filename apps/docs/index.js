import React from 'react';
import ReactDOM from 'react-dom';
import {
    Catalog,
    pageLoader
} from 'catalog';

import {
    defineCustomElements
} from '@hive/ui';

import generatedPages from './generated/pages.json';

const staticPages = [{
    path: '/',
    title: 'Welcome',
    content: pageLoader(() =>
        import('./WELCOME.md'))
}, {
    path: 'colors',
    title: 'Colors',
    content: pageLoader(() =>
        import('./COLORS.md'))
}];

require('@hive/ui/dist/ui-kit.css');

const theme = {
    pageHeadingBackground: '#3F4056',
    brandColor: '#3F4056',
    navBarTextColor: '#000',

    sidebarColor: '#F9F9F9',
    sidebarColorText: '#AFAFB7',
    sidebarColorTextActive: '#3F4056',
    sidebarColorHeading: '#3F4056',
}

function getCatalog() {
    return [...staticPages, ...generatedPages.map(page => {
        return {
            path: page.path,
            title: page.title,
            ...(page.markdownFile && {content: pageLoader(() => import (`./generated/${page.markdownFile}`))}),
            ...((page.pages && page.pages.length > 0) && {pages: page.pages.map(child => {
                    return {
                        path: child.path,
                        title: child.title,
                        content: pageLoader(() =>
                            import (`./generated/${child.markdownFile}`))
                    }
                })
            })
        }
    })]
}

ReactDOM.render( <
    Catalog title = 'UI Kit'
    Catalog theme = {
        theme
    }
    pages = {
        getCatalog()
    }
    />,
    document.getElementById('catalog')
);

defineCustomElements(window);
