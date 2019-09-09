module.exports = {
    name: 'storybook',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/apps/storybook',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js'
    ]
};
