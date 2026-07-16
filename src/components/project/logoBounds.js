/**
 * Loads an image from a src URL.
 */
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.decoding = 'async'
    image.onload = () => resolve(image)
    image.onerror = reject
    image.src = src
  })
}

/**
 * Measures opaque bounds on a downsampled canvas, returning ratios.
 */
function measureOpaqueRatios(image, alphaThreshold = 10) {
  const width = image.naturalWidth || image.width
  const height = image.naturalHeight || image.height

  if (!width || !height) return null

  const maxSample = 512
  const sampleScale = Math.min(1, maxSample / Math.max(width, height))
  const sampleWidth = Math.max(1, Math.round(width * sampleScale))
  const sampleHeight = Math.max(1, Math.round(height * sampleScale))

  const canvas = document.createElement('canvas')
  canvas.width = sampleWidth
  canvas.height = sampleHeight

  const context = canvas.getContext('2d', { willReadFrequently: true })
  if (!context) return null

  context.drawImage(image, 0, 0, sampleWidth, sampleHeight)

  let data
  try {
    data = context.getImageData(0, 0, sampleWidth, sampleHeight).data
  } catch {
    return null
  }

  let minX = sampleWidth
  let minY = sampleHeight
  let maxX = -1
  let maxY = -1

  for (let y = 0; y < sampleHeight; y += 1) {
    for (let x = 0; x < sampleWidth; x += 1) {
      const alpha = data[(y * sampleWidth + x) * 4 + 3]
      if (alpha > alphaThreshold) {
        if (x < minX) minX = x
        if (y < minY) minY = y
        if (x > maxX) maxX = x
        if (y > maxY) maxY = y
      }
    }
  }

  if (maxX < minX || maxY < minY) return null

  const pad = 2 / sampleWidth

  return {
    x: Math.max(0, minX / sampleWidth - pad),
    y: Math.max(0, minY / sampleHeight - pad),
    width: Math.min(1, (maxX - minX + 1) / sampleWidth + pad * 2),
    height: Math.min(1, (maxY - minY + 1) / sampleHeight + pad * 2),
  }
}

/**
 * Returns a trimmed PNG data URL for the opaque content of a logo,
 * removing excessive transparent padding without editing source assets.
 */
export async function createTrimmedLogoSrc(src) {
  if (!src) return null

  const image = await loadImage(src)
  const ratios = measureOpaqueRatios(image)

  if (!ratios) return src

  const fullWidth = image.naturalWidth || image.width
  const fullHeight = image.naturalHeight || image.height

  const cropX = Math.floor(ratios.x * fullWidth)
  const cropY = Math.floor(ratios.y * fullHeight)
  const cropWidth = Math.max(1, Math.ceil(ratios.width * fullWidth))
  const cropHeight = Math.max(1, Math.ceil(ratios.height * fullHeight))

  // Skip work when padding is already minimal
  const coverage = (cropWidth * cropHeight) / (fullWidth * fullHeight)
  if (coverage > 0.82) return src

  const canvas = document.createElement('canvas')
  canvas.width = cropWidth
  canvas.height = cropHeight

  const context = canvas.getContext('2d')
  if (!context) return src

  context.drawImage(
    image,
    cropX,
    cropY,
    cropWidth,
    cropHeight,
    0,
    0,
    cropWidth,
    cropHeight,
  )

  try {
    return canvas.toDataURL('image/png')
  } catch {
    return src
  }
}
