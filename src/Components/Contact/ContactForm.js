import React from 'react'
import { useFormik } from 'formik'
import { emailValidator } from '../../Services/formValidationsService'
import '../FormStyles.css'

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    validate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: handleFormSubmit
  })

  function validate(values) {
    const errors = {}

    validateName(values.name, errors)
    validateEmail(values.email, errors)
    validatePhone(values.phone, errors)
    validateMessage(values.message, errors)
    
    return errors
  }

  function handleFormSubmit(values) {
    console.log(values) // Service to be implemented
  }

  function validateName(name, errors) {
    if (!name) {
      errors.name = 'Name is required'
    }
  }

  function validateEmail(email, errors) {
    if (!email) {
      errors.email = 'Email is required'
    } else if (!emailValidator.isValid(email)) {
        errors.email = emailValidator.error
    }
  }

  function validatePhone(phone, errors) {
    if (!phone) {
      errors.phone = 'Phone is required'
    } else if (/[^0123456789]/.test(phone)) {
      errors.phone = 'Phone can only have numbers'
    } else if (phone.length < 8) {
      errors.phone = 'Phone must have at least 8 characters'
    }
  }

  function validateMessage(message, errors) {
    if (!message) {
      errors.message = 'Write some message to send'
    }
  }

  return (
    <form  className='form-container' onSubmit={formik.handleSubmit}>
      <div className='form-input-div'>
       <input className='input-field' name='name' placeholder='Enter your name' value={formik.values.name} onChange={formik.handleChange}/>
        <p className='error-message'>{formik.errors.name}</p>
      </div>

      <div className='form-input-div'>
       <input className='input-field' name='email' placeholder='Enter your email' value={formik.values.email} onChange={formik.handleChange}/>
       <p className='error-message'>{formik.errors.email}</p>
      </div>

      <div className='form-input-div'>
        <input  className='input-field' name='phone' placeholder='Enter your phone number' value={formik.values.phone} onChange={formik.handleChange}/>
        <p className='error-message'>{formik.errors.phone}</p>
      </div>

      <div className='form-input-div'>
        <textarea className='input-field' name='message' placeholder='Write your message here...' value={formik.values.message} onChange={formik.handleChange}/>
        <p className='error-message'>{formik.errors.message}</p>
      </div>

      <button className='submit-btn' type='submit'>Send</button>
    </form>
  )
}

export default ContactForm