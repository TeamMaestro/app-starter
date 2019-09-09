if (document.currentScript.src.indexOf('assetName=') !== -1) {
    var assetUrl = document.currentScript.src.split('assetName=')[0] + 'assetName=';
    window.getDsmAsset = function(assetPath) {
        return assetUrl + assetPath;
    }
}
