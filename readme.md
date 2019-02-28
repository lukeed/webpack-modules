# webpack-modules

> Handle `.mjs` files correctly

Because webpack does it wrong and won't fix it.

Without this plugin, `.mjs` files will **only** consider other `.mjs` files as ESM. It completely disregards any `.js` files in the ESM format, forcing them to seen & treated as CommonJS modules (despite their contents). _([comment](https://github.com/reactjs/react-transition-group/pull/77))_

Additionally, without this plugin, `.mjs` files do not follow the same [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolvemainfields) sequence that's defined in your main configuration. _([comment](https://github.com/webpack/webpack/issues/6796#issuecomment-374980347))_


## Usage

The plugin takes no options. Simply require it and invoke like any other plugin~

```js
// webpack.config.js
const WebpackModules = require('webpack-modules');

module.exports = {
  // ...
  plugins: [
    new WebpackModules()
  ]
}
```


## Credits

Thank you to [@ForsakenHarmony](https://github.com/ForsakenHarmony) who did the research and legwork as part of [`preact-cli`](https://github.com/developit/preact-cli) – via [this](https://github.com/developit/preact-cli/pull/741/files) and [that](https://github.com/developit/preact-cli/pull/746/files).


## License

MIT © [Luke Edwards](https://lukeed.com)
