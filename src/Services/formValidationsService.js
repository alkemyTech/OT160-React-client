const validImageFormats = ['jpg', 'png']

const imageValidator = {
  getFormat: (image) => {
    const splitFilePath = image.split('.')
    const extension = splitFilePath[splitFilePath.length -1]
    return extension?.toLowerCase()
  },
  isValid: (imageFormat) => {
    return validImageFormats.some(format => format === imageFormat)
  },
  formatError: `Invalid image format. It must be one of these: ${validImageFormats.join(', ')}.`
}

const emailValidator = {
  isValid: (email) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
  },
  error: 'Please enter a valid email.'
}

export { imageValidator, emailValidator }