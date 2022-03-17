import React, { useState } from 'react';
import { useFormik } from 'formik'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '../FormStyles.css';

const CategoriesForm = () => {

    const [initialValues, setInitialValues] = useState({
        name: '',
        description: '',
        image: ''
    })

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } if(e.target.name === 'description'){
            setInitialValues({...initialValues, description: e.target.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Title"></input>
            <CKEditor editor={ClassicEditor}
                      data={initialValues.description}
                      onChange={(event, editor) => {
                        setInitialValues(previous => {
                          previous.description = editor.getData()
                          return previous
                        })
                      }}>

            </CKEditor>
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default CategoriesForm;