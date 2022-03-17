import React from 'react';
import { useFormik } from 'formik'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '../FormStyles.css';

const CategoriesForm = () => {

    const formik = useFormik({
      initialValues: {
        name: '',
        description: '',
        image: ''
      },
      validate,
      validateOnChange: false,
      validateOnBlur: false,
      onSubmit: values => {
        console.log(values)
      },
    })

    function handleDescriptionChange (event, editor) {
      formik.setValues(previous => {
        previous.description = editor.getData()
        return previous
      })
    }

    function validate(values) {
      const errors = {}
      const imageFormat = values.image.slice(-3).toLowerCase()

      if (!values.name) {
        errors.name = 'Name is required'
      } else if (values.name.length < 4) {
        errors.name = 'Name should have at least 4 characters'
      }
      
      if (!values.description) {
        errors.description = 'Description is required'
      }
      
      if (!values.image) {
        errors.image = 'An image is required'
      } else if (imageFormat !== 'jpg' || imageFormat !== 'png') {
        errors.image = 'The image must have JPG or PNG extension'
      }

      return errors
    }
  
    return (
        <form className="form-container" onSubmit={formik.handleSubmit}>
          <div className='form-input-div'>
            <input className="input-field" type="text" name="name" value={formik.values.name} onChange={formik.handleChange} placeholder="Name"></input>
            <p className='error-message'>{formik.errors.name}</p>
          </div>

          <div className='form-input-div'>
            <CKEditor editor={ClassicEditor} data={formik.values.description} 
                      onChange={handleDescriptionChange}>
            </CKEditor>
            <p className='error-message'>{formik.errors.description}</p>
          </div>

          <div className='form-input-div'>
            <div className='file-input-div'>
              <label>Upload an image for this category</label>
              <input className='input-field' type='file' name='image' value={formik.values.image} onChange={formik.handleChange}/>
            </div>
            <p className='error-message'>{formik.errors.image}</p>
          </div>

          <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default CategoriesForm;