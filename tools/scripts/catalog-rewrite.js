const fs = require('fs');
const catalogCLIPath = './node_modules/catalog/dist/cli/bin/catalog-start.js';

/**
 * Rewrites the source directory path of the Catalog project to point to
 * our apps directory "docs" project.
 */
fs.readFile(catalogCLIPath, 'utf8', function (err, data) {
    if (err) {
        return console.error(err);
    }
    const result = data.replace(/catalogSrcDir = "catalog"/g, 'catalogSrcDir = "docs"');
    fs.writeFile(catalogCLIPath, result, 'utf8', function (err) {
        if (err) {
            return console.error(err);
        }
    })
})
