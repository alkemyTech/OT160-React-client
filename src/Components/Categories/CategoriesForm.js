import React from 'react';
import { useFormik } from 'formik'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Patch, Post } from '../../Services/privateApiService'
import { imageValidator } from '../../Services/formValidationsService'
import '../FormStyles.css';


const CategoriesForm = (props) => {
    const { category } = props

    const formik = useFormik({
      initialValues: {
        name: category?.name || '',
        description: category?.description || '',
        image: category?.image || ''
      },
      validate,
      validateOnChange: false,
      validateOnBlur: false,
      onSubmit: handleFormSubmit
    })

    function handleDescriptionChange (event, editor) {
      formik.setValues(previous => {
        previous.description = editor.getData()
        return previous
      })
    }

    function handleFormSubmit(values) {
      if (category) {
        Patch(`/categories/${category.id}`, values)
      } else {
        Post('/categories', values)
      }
    }

    function validateName(name, errors) {
      if (!name) {
        errors.name = 'Name is required'
      } else if (name.length < 4) {
        errors.name = 'Name should have at least 4 characters'
      }
    }

    function validateDescription(description, errors) {
      if (!description) {
        errors.description = 'Description is required'
      }
    }

    function validateImage(image, errors) {
      const imageFormat = imageValidator.getFormat(image)
      if (!image) {
        errors.image = 'An image is required'
      } else if (!imageValidator.isValid(imageFormat)) {
        errors.image = imageValidator.formatError
      } 
    }

    function validate(values) {
      const errors = {}

      validateName(values.name, errors)
      validateDescription(values.description, errors)
      validateImage(values.image, errors)

      return errors
    }
  
    return (
        <form className="form-container" onSubmit={formik.handleSubmit}>
          <div className='form-input-div'>
            <input className="input-field" type="text" name="name" value={formik.values.name} onChange={formik.handleChange} placeholder="Name"/>
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
              <input className='input-field' type='file' name='image' value={formik.values.image} onChange={formik.handleChange}/>
            </div>
            <p className='error-message'>{formik.errors.image}</p>
          </div>

          <button className="submit-btn" type="submit">Send</button>
        </form>
    );

}

 
export default CategoriesForm;