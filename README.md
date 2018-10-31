# 🌫  Soften

For ~~all~~ *one* of your blurry image needs

## Install

`yarn add soften`

## Use

```js
const soften = require('soften')

soften({ filePath: 'path to image' })
  .then(data => /* do stuff with data */)
  .catch(e => console.error(e))
```