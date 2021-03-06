module.exports = api => ({
  presets: [
    [
      'babel-preset-jason/esm',
      {
        modules: api.env() !== 'esm',
        useBuiltIns: 'usage',
      },
    ],
    '@babel/typescript',
  ],
});
