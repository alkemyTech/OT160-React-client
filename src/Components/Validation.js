import { ValidImageFormats } from './AppConstants'

const ImageValidator = {
  isValid: (imageFormat) => {
    return ValidImageFormats.some(format => format === imageFormat)
  },
  formatError: `Invalid image format. It must be one of these: ${ValidImageFormats.join(', ')}.`
}

export { ImageValidator }