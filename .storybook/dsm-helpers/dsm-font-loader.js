function getPath(path) {
    if (window.getDsmAsset) {
        return window.getDsmAsset(path);
    }
    else {
        return path;
    }
}

if (DSM_FONT_CONFIG) {
    var fontFaces = DSM_FONT_CONFIG;
}

if (fontFaces) {
    fontFaces.forEach(async fontOptions => {
        const font = new FontFace(fontOptions.family, `url(${getPath('fonts/' + fontOptions.source)})`, fontOptions.descriptors);
        try {
            await font.load();
            document.fonts.add(font);
        }
        catch (error) {
            console.warn('Error loading fonts:', `${error.name}: ${error.message}`);
        }
    });
}

