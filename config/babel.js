module.exports = {
  presets: [
    ['babel-preset-env', {
      'targets': {
        'node': 'current'
      }
    }, 'react']
  ],
  env: {
    production: {
      plugins: ['transform-react-remove-prop-types']
    }
  }
}