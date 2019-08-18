module.exports = {
  name: 'native',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/native',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
