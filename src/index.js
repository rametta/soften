const sharp = require('sharp')

const soften = ({ filePath, options = {} }) => {
  try {
    return sharp(filePath)
      .resize(options.width || 20, options.height || 30)
      .jpeg({ quality: options.quality || 50 })
      .toBuffer({ resolveWithObject: true })
      .then(({ data, info }) => ({
        base64: `data:image/${info.format};base64,${data.toString('base64')}`,
        height: info.height,
        width: info.width,
        aspectRatio: info.width / info.height,
        src: options.src || '',
        srcSet: options.srcSet || '',
        sizes: options.sizes || ''
      }))
  } catch (err) {
    return Promise.reject(err)
  }
}

module.exports = soften