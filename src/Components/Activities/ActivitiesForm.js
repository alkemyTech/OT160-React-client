import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formik } from "formik";
import '../FormStyles.css';
import { Patch, Post } from '../../Services/privateApiService';

const ActivitiesForm = (props) => {
    
    const {id, name, description, image} = props;

    const [valuesProps, setValuesProps] = useState({
        name: name || '',
        description: description || '',
        image: image || ''
    });
    
    const saveActivitie =async(values)=>{
        if(props){
            try{
                Patch(`https://ongapi.alkemy.org/api/docs#/activities/${id}`, values)
            }catch(e){
                console.log(e);
            }
        }else{
            try{
                Post('https://ongapi.alkemy.org/api/docs#/activities/create', values);
            }catch(e){
                console.log(e);
            }
        }
    }

    const validate =(values)=>{
        let errores={};
        if(!values.name){
            errores.name = 'Por favor ingrese un nombre!';
        }

        if(!values.image){
            errores.image = 'Por favor ingrese una imagen!';
        }else if(!/(.jpg|.JPG|.png|.PNG)/.test(`${values.image.name}`)){
            errores.image = 'Solo se pueden seleccionar imagenes jpg y pdf';
        }
        return errores;
    }
    
    
    return (
        <div>
            <Formik
                initialValues={{
                    name: valuesProps.name || '',
                    description: valuesProps.description || '',
                    image: valuesProps.image || '',
                }}

                validate = {validate}
                
                onSubmit={(valores, {resetForm})=>{
                    setValuesProps({
                        name: valores.name,
                        description: valores.description,
                        image: valores.image
                    });
                    saveActivitie(valuesProps);
                    resetForm();
                }}
            >
                {({values, handleSubmit, errors, handleChange, handleBlur, setFieldValue, touched} )=>(
                    <form className="form-container" onSubmit={handleSubmit}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label style={{margin: '5px 0px'}}>Nombre:</label>
                            <input 
                                type="text"
                                placeholder={values.name}
                                value={values.name}
                                id='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.name && errors.name && <p style={{color: 'red', fontSize: '0.5rem'}}>{errors.name}</p>}
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label style={{margin: '5px 0px'}}>Descripcion:</label>
                            <CKEditor
                                    editor={ ClassicEditor }
                                    data={values.description}
                                    value={values.description}
                                    onChange={ ( event, editor ) => {
                                        setFieldValue("description",editor.getData()) 
                                    }}
                                    
                            />  
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label style={{margin: '5px 0px'}}>Imagen:</label>
                            <label style={{ backgroundColor: '#2e86c1', padding: 8, color: '#fff', textAlign: 'center' }}>
                                Select image
                                <input
                                    style={{ display: 'none' }}
                                    type="file"
                                    name= 'image'
                                    onBlur={handleBlur}
                                    onChange={(e)=>{
                                        setFieldValue("image", e.target.files[0]) 
                                    }}
                                />
                            </label> 
                            { touched.image && errors.image && <p style={{color: 'red', fontSize: '0.5rem'}}>{errors.image}</p>}
                        </div> 
                        <button style={{ backgroundColor: '#2e86c1', padding: 8, color: '#fff', textAlign: 'center', border: 'none' }} type='submit' >Enviar</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}
 
export default ActivitiesForm;