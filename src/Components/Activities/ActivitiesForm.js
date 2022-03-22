import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../FormStyles.css';

const ActivitiesForm = ({actividad}) => {
    const receptedActiviti = actividad;
    const [alertInputValidate, setAlertInputValidate] = useState();
    const [alertValidation, setAlertValidation] = useState();
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: '',
        image: ''
    });


    const saveImage =(e)=>{
        if(!(/\.(jpg|png)$/i).test(e.target.files[0].name)){
            setAlertInputValidate(<p style={{color: 'red'}}>The file must be jpg or png</p>);
        }else{
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
        receptedActiviti
        ?
            fetch('/activities/:id', {
                method: 'PATCH',
                body: JSON.stringify(initialValues)
            })
        :
            initialValues.name === '' & initialValues.image === ''
            ?
                setAlertValidation(<p style={{color: 'red'}}>Name field and image field are required</p>)
            :
                fetch('/activities/create',{
                    mothod: 'POST',
                    body: JSON.stringify(initialValues)
                }) 
    }
    
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <label>Nombre:</label>
            {
                receptedActiviti
                ?
                <input className="input-field" type="text" name="name" value={receptedActiviti.name} onChange={handleChange} placeholder="Activity Title" ></input>
                :
                <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Activity Title"></input>
            }
            <label>Imagen:</label>
            {
                receptedActiviti
                ?
                <img src={receptedActiviti.image} alt={receptedActiviti.name}/>
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
                        receptedActiviti
                        ?
                        receptedActiviti.description
                        :
                        "<p>your description</p>"
                    }
                    onChange={ ( event, editor ) => {
                        setInitialValues({...initialValues, description: (editor.getData())}); 
                    } }
                />
            </div>
            <button className="submit-btn" type="submit">Send</button>
            <div>
                {alertValidation}
            </div>
        </form>
    );
}
 
export default ActivitiesForm;