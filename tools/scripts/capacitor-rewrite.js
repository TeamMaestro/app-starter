const fs = require('fs');
const capacitorConfigPath = './node_modules/@capacitor/cli/dist/config.js';

fs.readFile(capacitorConfigPath, 'utf8', function (err, data) {
    if (err) {
        return console.error(err);
    }
    data = data.replace(/this.app.rootDir, platformName/g, 'process.cwd(), platformName');
    data = data.replace(/this.app.rootDir, this.ios.name/g, 'process.cwd(), this.ios.name');
    data = data.replace(/this.app.rootDir, this.android.name/g, 'process.cwd(), this.android.name');
    data = data.replace(/this.app.rootDir, this.electron.name/g, 'process.cwd(), this.electron.name');

    data = data.replace(`join(dir, 'package.json')`, `join(process.cwd().split('/apps/')[0], 'package.json')`);

    data = data.replace(new RegExp('\'../../node_modules', 'g'), '\'../../../../node_modules');

    fs.writeFile(capacitorConfigPath, data, 'utf8', function (err) {
        if (err) {
            return console.error(err);
        }
    })
});

const capacitorCommonPath = './node_modules/@capacitor/cli/dist/common.js';

fs.readFile(capacitorCommonPath, 'utf8', function (err, data) {
    if (err) {
        return console.error(err);
    }
    data = data.replace(`!await fs_1.existsAsync('package.json')`, 'false');
    fs.writeFile(capacitorCommonPath, data, 'utf8', function (err) {
        if (err) {
            return console.error(err);
        }
    })
});

const capacitoriOSUpdatePath = './node_modules/@capacitor/cli/dist/ios/update.js';

fs.readFile(capacitoriOSUpdatePath, 'utf8', function (err, data) {
    if (err) {
        return console.error(err);
    }
    data = data.replace(/config.app.rootDir, config.ios.name, projectName/g, 'process.cwd(), config.ios.name, projectName');
    data = data.replace('cd "${config.app.rootDir}"', 'cd "${process.cwd()}"');

    data = data.replace(new RegExp('\'../../node_modules', 'g'), '\'../../../../node_modules');

    fs.writeFile(capacitoriOSUpdatePath, data, 'utf8', function (err) {
        if (err) {
            return console.error(err);
        }
    })
});

const capacitorAndroidCommonPath = './node_modules/@capacitor/cli/dist/android/common.js';

fs.readFile(capacitorAndroidCommonPath, 'utf8', function (err, data) {
    if (err) {
        return console.error(err);
    }
    data = data.replace(/config.app.rootDir, config.android.platformDir/g, 'process.cwd(), config.android.platformDir');
    fs.writeFile(capacitorAndroidCommonPath, data, 'utf8', function (err) {
        if (err) {
            return console.error(err);
        }
    })
});

const capacitorAndroidUpdatePath = './node_modules/@capacitor/cli/dist/android/update.js';

fs.readFile(capacitorAndroidUpdatePath, 'utf8', function (err, data) {
    if (err) {
        return console.error(err);
    }
    data = data.replace(`path_1.join(config.app.rootDir, 'android/capacitor.settings.gradle')`, `path_1.join(process.cwd(), 'android/capacitor.settings.gradle')`);
    data = data.replace(`path_1.join(config.app.rootDir, 'android/app/capacitor.build.gradle')`, `path_1.join(process.cwd(), 'android/app/capacitor.build.gradle')`);
    fs.writeFile(capacitorAndroidUpdatePath, data, 'utf8', function (err) {
        if (err) {
            return console.error(err);
        }
    })
});
