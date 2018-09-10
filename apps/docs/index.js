import React from 'react';
import ReactDOM from 'react-dom';
import {
    Catalog,
    pageLoader
} from 'catalog';

import {
    defineCustomElements
} from '@hive/ui';

import PAGES_CONFIG from './generated/pages.json';

const UI_VARIABLES = require('@hive/ui/dist/ui-kit.css');

const pages = [{
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

const theme = {
    pageHeadingBackground: '#3F4056',
    brandColor: '#3F4056',
    navBarTextColor: '#000',

    sidebarColor: '#F9F9F9',
    sidebarColorText: '#AFAFB7',
    sidebarColorTextActive: '#3F4056',
    sidebarColorHeading: '#3F4056',

    // fontFamily: 'Whitney SSm Am, Whitney SSm B, Helvetica Neue'
}

function getCatalog() {
    for (let page of PAGES_CONFIG) {
        let newPage = {
            path: page.path,
            title: page.title,
            pages: []
        }
        if (page.pages) {
            for (let child of page.pages) {
                newPage.pages.push({
                    styles: [UI_VARIABLES],
                    path: child.path,
                    title: child.title,
                    content: pageLoader(() =>
                        import (`./generated/${child.markdownFile}`))
                });
            }
        }
        pages.push(newPage);
    }
    return pages;
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
