import * as yup from 'yup'

const validImageFormats = ['jpg', 'png']
const emailSchema = yup.object().shape({email: yup.string().email()}) 

const ImageValidator = {
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

const EmailValidator = {
  isValid: (email) => {
    return emailSchema.isValid(email)
  },
  error: 'Please enter a valid email.'
}

export { ImageValidator, EmailValidator }