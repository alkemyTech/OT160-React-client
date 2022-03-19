import { ValidImageFormats } from './AppConstants'

const ImageValidator = {
  getFormat: (image) => {
    const splitFilePath = image.split('.')
    const extension = splitFilePath[splitFilePath.length -1]
    return extension?.toLowerCase()
  },
  isValid: (imageFormat) => {
    return ValidImageFormats.some(format => format === imageFormat)
  },
  formatError: `Invalid image format. It must be one of these: ${ValidImageFormats.join(', ')}.`
}

export { ImageValidator }