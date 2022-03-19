import React from 'react'

import '../FormStyles.css'

const ContactForm = () => {


  return (
    <form  className='form-container'>
      <div className='form-input-div'>
       <input className='input-field' name='name' placeholder='Enter your name'/>
      </div>

      <div className='form-input-div'>
       <input className='input-field' name='email' placeholder='Enter your email'/>
      </div>

      <div className='form-input-div'>
        <input  className='input-field' name='phone' placeholder='Enter your phone number'/>
      </div>

      <div className='form-input-div'>
        <textarea className='input-field' name='message' placeholder='Write your message here...'/>
      </div>

      <button className='submit-btn' type='submit'>Send</button>
    </form>
  )
}

export default ContactForm