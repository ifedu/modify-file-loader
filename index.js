'use strict'

const loaderUtils = require('loader-utils')

module.exports = function(content, map) {
    this.cacheable()

    const options = loaderUtils.getOptions(this)

    const contentHelp = options.convert.call(this, content)

    content = (contentHelp)
        ? contentHelp
        : content

	return content
}