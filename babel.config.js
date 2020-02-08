module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      ['@babel/preset-env', {
        'useBuiltIns': 'usage',
        'corejs': 3,
        'targets': {
          'browsers': ['> 1%', 'last 2 versions', 'not ie <= 8'],
        },
      }],
    ],
  }
}