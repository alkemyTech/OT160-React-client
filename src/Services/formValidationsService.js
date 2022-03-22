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
  formatError: `El formato del archivo debe ser uno de los siguientes:  ${VALID_IMAGE_FORMATS.join(', ')}.`
}

const emailValidator = {
  isValid: (email) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
  },
  error: 'Ingrese un email válido por favor.'
}

export { imageValidator, emailValidator }