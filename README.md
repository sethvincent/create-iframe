# make-iframe

Easily create an iframe with arbitrary javascript.

Extracted from [browser-module-sandbox](https://github.com/maxogden/browser-module-sandbox)

## Usage

```js
var makeIframe = require('make-iframe')

var code = 'console.log(\'hello\')'
var iframe = makeIframe(code, { container: document.body })
```

## License
[MIT](LICENSE.md)
