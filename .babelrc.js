const env = require('./env-config')

module.exports = {
  'presets': [
    'next/babel'
  ],
  'plugins': [
    ['transform-define', env],
    "babel-plugin-styled-components",
    "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
  ]
}
