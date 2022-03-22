const VALID_IMAGE_FORMATS = ['jpg', 'png']

const imageValidator = {
  getFormat: (image) => {
    const splitFilePath = image.split('.')
    const extension = splitFilePath[splitFilePath.length -1]
    return extension?.toLowerCase()
  },
  isValid: (imageFormat) => {
    return VALID_IMAGE_FORMATS.includes(imageFormat)
  },
  formatError: `Invalid image format. It must be one of these: ${VALID_IMAGE_FORMATS.join(', ')}.`
}

const emailValidator = {
  isValid: (email) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
  },
  error: 'Please enter a valid email.'
}

export { imageValidator, emailValidator }