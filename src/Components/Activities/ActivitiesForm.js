import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../FormStyles.css';

const ActivitiesForm = ({actividad}) => {
    const [alertInputValidate, setAlertInputValidate] = useState();
    const valueProps = actividad;
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: '',
        image: ''
    });


    const saveImage =(e)=>{
        if(!(/\.(jpg|png)$/i).test(e.target.files[0].name)){
            setAlertInputValidate(<p style={{color: 'red'}}>The file must be jpg or png</p>);
        }else{
            console.log(e.target.files[0]);
            setInitialValues({...initialValues, image:`${e.target.files[0].name}` }) ;
            setAlertInputValidate(<p style={{color: 'green'}}>Selected file</p>);
        }
    } 

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
    }
    
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <label>Nombre:</label>
            {
                valueProps
                ?
                <input className="input-field" type="text" name="name" value={valueProps.name} onChange={handleChange} placeholder="Activity Title" ></input>
                :
                <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Activity Title"></input>
            }
            <label>Imagen:</label>
            {
                valueProps
                ?
                <img src={valueProps.image} alt={valueProps.name}/>
                :
                <label style={{ backgroundColor: '#2e86c1', padding: 8, color: '#fff', textAlign: 'center' }}>
                    Seleccionar Imagen
                    <input
                        style={{ display: "none" }}
                        type="file"
                        onChange={saveImage}
                    />
                </label> 
            }
            
            <div>
                {alertInputValidate}
            </div>
            <label>Descripcion:</label>    
            <div className="App">
                <CKEditor
                    editor={ ClassicEditor }
                    data= {
                        valueProps
                        ?
                        valueProps.description
                        :
                        "<p>your description</p>"
                    }
                    onChange={ ( event, editor ) => {
                        setInitialValues({...initialValues, description: (editor.getData())}); 
                    } }
                />
            </div>
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default ActivitiesForm;