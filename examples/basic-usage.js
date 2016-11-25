var createIframe = require('../index')

var script = `console.log('heyo')`
var frame = createIframe(script, { container: document.body })
console.log('frame', frame)
