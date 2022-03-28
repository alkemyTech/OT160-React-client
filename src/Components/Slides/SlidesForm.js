import React, { useRef } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Patch, Post } from '../../Services/privateApiService';
import {supported_formats_image} from '../../utilities/const-utility'
import '../FormStyles.css';

export default function Slides({object}) {
    const file_input_image = useRef();
	const formik = useFormik({
		initialValues: {
			name: object?.name || '',
			order: object?.order || '',
			description: object?.description || '',
			imagen: object?.imagen || ''
		},
		onSubmit: value => {
			
			if (!object) {
				Post('/Slides/create',formik.values)
			} else {
				Patch(`/Slides/:${object.id}`,formik.values)
			}
		},
        
		validationSchema: yup.object({
			name: yup.string().min(4, 'Debe tener minimo 4 caracteres').required('Campo obligatorio'),
			order: yup.string().required('Campo obligatorio'),
			description: yup.string().required('Campo obligatorio'),
			imagen: yup.mixed().nullable().required('A file is required').test('format', 'Formato no permitido', (value) => !value || (value && supported_formats_image.includes(value.type)))
		})
	})

	const handleChangeCkeditor = (e, editor) => {
		formik.setValues(previous => {
			previous.description = editor.getData()
			return previous
		})
	}
    
	const handleBlurCkeditor = () => {
		formik.setTouched({...formik.touched,
			description: true
		});
	}

    const handleChangeImage=()=>{
        formik.setFieldValue('imagen',file_input_image.current.files[0])
    }

return (
        <div>
            <form className="form-container" onSubmit={formik.handleSubmit}>
                <input className="input-field" type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Slide Title"></input>                
                {formik.touched.name && formik.errors.name }
                <input className="input-field" type="text" name="order" value={formik.values.order} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Write order" ></input>
                {formik.touched.order && formik.errors.order }
                <input className="input-field" type="file" name="imagen"  onChange={handleChangeImage} onBlur={formik.handleBlur} ref={file_input_image} placeholder="upload imagen"></input>
                {formik.touched.imagen && formik.errors.imagen }
                <CKEditor
                    editor={ClassicEditor}
                    data={formik.values.description}
                    onChange={handleChangeCkeditor}
                    onBlur={handleBlurCkeditor}
                />
                {formik.touched.description && formik.errors.description }
                <button  className="submit-btn" type="submit">Send</button>
            </form>
        </div>
    );}

