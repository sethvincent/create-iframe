# create-iframe

Easily create an iframe with arbitrary javascript.

Extracted from [browser-module-sandbox](https://github.com/maxogden/browser-module-sandbox)

## Usage

```js
var createIframe = require('create-iframe')

var code = 'console.log(\'hello\')'
var iframe = createIframe(code, { container: document.body })
```

## License
[MIT](LICENSE.md)
