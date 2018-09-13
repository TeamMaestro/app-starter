const chokidar = require('chokidar');
const ncp = require('ncp').ncp;
const glob = require('glob');
const mkdirp = require('mkdirp');
const getDirName = require('path').dirname;
const fs = require('fs');

const pageJSONOutput = './apps/docs/generated/pages.json';
const libDirectory = './libs/ui/src/components/';
const markupFileMatcher = './libs/ui/src/components/**/*.md';
const destinationDir = './apps/docs/generated/';

const watcher = chokidar.watch(markupFileMatcher, {
    ignored: [],
    persistent: true
});

let pages = [];

watcher
    .on('add', (path) => {
        generateCatalog();
    })
    .on('change', function (path) {
        generateCatalog();
    })
    .on('unlink', function (path) {
        generateCatalog();
    })
    .on('error', function (error) {
        console.error('Error occured in watcher.', error);
    });

function generateCatalog() {
    pages = [];
    glob(markupFileMatcher, function (err, files) {
        if (err) {
            return console.error(err);
        }
        let index = 0;
        files.forEach(file => {
            console.log('file', file);
            const destination = getCatalogPath(file);
            mkdirp(getDirName(destination), function (err) {
                if (err) {
                    return console.error(err);
                }
                ncp(file, destination, function (err) {
                    if (err) {
                        return console.error(err);
                    }
                    getCatalogParent(destination);
                    index++;
                    if (index === files.length) {
                        fs.writeFile(pageJSONOutput, JSON.stringify(pages), 'utf8', function (err) {
                            if (err) {
                                return console.error(err);
                            }
                        });
                    }
                });
            });
        });
    });
}

function getCatalogPath(existingPath) {
    return existingPath.replace(libDirectory, destinationDir);
}

function getCatalogParent(destinationPath) {
    let originalPath = destinationPath.replace(destinationDir, '');

    let path = originalPath.substr(0, originalPath.lastIndexOf('/'));

    if (path.indexOf('/') === -1) {
        if (!pageParentExists(pages, path)) {
            writeParentPage(pages, path, originalPath);
        }
    }

    while (path.indexOf('/') !== -1) {
        const folder = path.substr(0, path.indexOf('/'));

        if (!pageParentExists(pages, folder)) {
            writeParentPage(pages, folder);
        }

        path = path.substr(path.indexOf('/') + 1);

        if (path.indexOf('/') === -1) {
            appendToPageTree(path, originalPath, folder);
        }
    }
}

function pageParentExists(pages, title) {
    let exists = false;

    for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        // If the page title matches and the page has children, it already exists
        if (page.title.toLowerCase() === title.toLowerCase() && page.pages) {
            exists = true;
            break;
        } else {
            if (page.pages) {
                exists = pageParentExists(page.pages, title);
            }
        }
    }

    return exists;
}

function writeParentPage(pages, title, markdownFile) {
    pages.push({
        path: title.toLowerCase(),
        title: formatPageTitle(title),
        pages: [],
        ...(markdownFile && {markdownFile: markdownFile})
    });
}

function appendToPageTree(newPageName, destinationPath, parents) {
    const parentIndex = pages.findIndex(page => {
        return page.path.indexOf(parents) !== -1;
    });
    if (parentIndex !== -1) {
        const childIndex = pages[parentIndex].pages.findIndex(child => {
            return child.path.indexOf(newPageName) !== -1;
        });
        if (childIndex === -1) {
            if (pages[parentIndex].markdownFile) {
                let title = formatPageTitle(pages[parentIndex].markdownFile.split('/')
                    [pages[parentIndex].markdownFile.split('/').length - 1]
                    .split('.')[0]);
                pages[parentIndex].pages.push({
                    title: title,
                    path: pages[parentIndex].path,
                    markdownFile: pages[parentIndex].markdownFile
                });
                delete pages[parentIndex].markdownFile;
            }
            pages[parentIndex].pages.push({
                title: formatPageTitle(newPageName),
                path: `${pages[parentIndex].path}/${newPageName}`,
                markdownFile: destinationPath
            });
        }
    }
}

function formatPageTitle(title) {
    title = title.replace(/-/g, ' ');
    return title.substr(0, 1).toUpperCase() + title.substr(1)
}
