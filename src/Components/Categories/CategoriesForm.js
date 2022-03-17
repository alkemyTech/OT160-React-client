import React from 'react';
import { useLocation } from 'react-router-dom'
import { useFormik } from 'formik'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import axios from 'axios'
import '../FormStyles.css';

const CategoriesForm = () => {
    const location = useLocation()
    const category  = (location.state
                                          ? location.state.category
                                          : {name: '', description: '', imageUrl: ''})

    const formik = useFormik({
      initialValues: {
        name: category.name,
        description: category.description,
        imageUrl: category.imageUrl
      },
      validate,
      validateOnChange: false,
      validateOnBlur: false,
      onSubmit: values => {
        if (category) {
          axios({
            method: 'patch',
            url: `/categories/${category.id}`,
            data: values
          }).catch(err => alert(err)) // falta acordar manejo de errores
        } else {
          axios({
            method: 'post',
            url: '/categories',
            data: values
          }).catch(err => alert(err)) // falta acordar manejo de errores
        }
      }
    })

    function handleDescriptionChange (event, editor) {
      formik.setValues(previous => {
        previous.description = editor.getData()
        return previous
      })
    }

    function validate(values) {
      const errors = {}
      const imageFormat = values.imageUrl.slice(-3).toLowerCase()

      if (!values.name) {
        errors.name = 'Name is required'
      } else if (values.name.length < 4) {
        errors.name = 'Name should have at least 4 characters'
      }
      
      if (!values.description) {
        errors.description = 'Description is required'
      }
      
      if (!values.imageUrl) {
        errors.imageUrl = 'An image is required'
      } else if (imageFormat !== 'jpg' && imageFormat !== 'png') {
        errors.imageUrl = 'The image must have JPG or PNG extension'
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
              <label>Category image</label>
              <input className='input-field' type='file' name='imageUrl' value={formik.values.imageUrl} onChange={formik.handleChange}/>
            </div>
            <p className='error-message'>{formik.errors.imageUrl}</p>
          </div>

          <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default CategoriesForm;