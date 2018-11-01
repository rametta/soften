# 🌫  Soften

For ~~all~~ *one* of your blurry image needs. [Demo](https://soften.surge.sh)

![Blur Effect](https://i.imgur.com/BpFgQ3N.gif "Blur Effect")

## Install

`yarn add soften`

## Use

```js
const soften = require('soften')

soften({ filePath: 'path to image' })
  .then(data => /* do stuff with data */)
  .catch(e => console.error(e))
```

If using with Gatsby Image
```js
<Img
  placeholderStyle={{ filter: 'blur(20px)' }}
  imgStyle={{ transition: 'opacity .3s' }}
  fluid={{
    ...data // data from soften()
    src: 'url to real image'
  }}
  critical={true}
/>
```
