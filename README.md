# create-iframe

Programmatically create an iframe that can execute javascript

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]
[![conduct][conduct]][conduct-url]

[npm-image]: https://img.shields.io/npm/v/create-iframe.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/create-iframe
[travis-image]: https://img.shields.io/travis/sethvincent/create-iframe.svg?style=flat-square
[travis-url]: https://travis-ci.org/sethvincent/create-iframe
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[conduct]: https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-green.svg?style=flat-square
[conduct-url]: CONDUCT.md

## About

Easily create an iframe with arbitrary javascript.

Extracted from [browser-module-sandbox](https://github.com/maxogden/browser-module-sandbox)

## Install

```sh
npm install --save create-iframe
```

## Usage

```js
var createIframe = require('create-iframe')

var code = 'console.log(\'hello\')'
var iframe = createIframe(code, { container: document.body })
```

### Examples
- [Basic example](examples/basic.js)

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## Conduct

It is important that this project contributes to a friendly, safe, and welcoming environment for all. Read this project's [code of conduct](CONDUCT.md)

## Changelog

Read about the changes to this project in [CHANGELOG.md](CHANGELOG.md). The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## Contact

- **issues** – Please open issues in the [issues queue](https://github.com/sethvincent/create-iframe/issues)
- **twitter** – Have a question? [@sethdvincent](https://twitter.com/sethdvincent)

## License

[MIT](LICENSE.md)
