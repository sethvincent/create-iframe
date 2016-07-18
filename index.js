var assert = require('assert')
var iframe = require('iframe')

// Originally from browser-module-sandbox
// https://github.com/maxogden/browser-module-sandbox/blob/master/index.js#L145

module.exports = function createIframe (script, options) {
  assert(options.container, 'options.container is required')
  script = script || ''

  var frame = iframe({
    container: options.container,
    sandboxAttributes: options.sandbox,
    scrollingDisabled: true
  })

  // setTimeout is because iframes report inaccurate window.innerWidth/innerHeight, even after DOMContentLoaded!
  script = 'setTimeout(function(){\n;' + script + '\n;}, 0)'

  // check for </script> in code to use faster way executing script (https://github.com/maxogden/browser-module-sandbox/issues/13)
  var scriptTag = script.indexOf('</script>') === -1 ? (
      '<script type="text/javascript">' + script + '</script>'
  ) : (
      '<script type="text/javascript" src="data:text/javascript;charset=UTF-8,'+ encodeURIComponent(script) + '"></script>'
  )

  function render (newscript) {
    return {
      script: newscript,
      head: options.head + options.style,
      body: (options.body || '') + scriptTag,
      sandboxAttributes: options.sandbox,
      name: options.name
    }
  }

  frame.setHTML(render(script))
  frame.render = function (newscript) {
    console.log('render', newscript)
    frame.setHTML(render(newscript))
  }

  return frame
}
