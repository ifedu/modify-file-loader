> Webpack loader for modify file

```javascript
const _ = require('lodash')

return {
    loader: 'modify-file-loader',

    options: {
        convert(content: any) {
            return _.template(content, {
                evaluate:    /\{\{(.+?)\}\}/g,
                interpolate: /\{\{=(.+?)\}\}/g,
                escape:      /\{\{-(.+?)\}\}/g
            })({})
        }
    }
}
```