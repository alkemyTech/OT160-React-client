import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import '../FormStyles.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const SlidesForm = ({objeto}) => {
    const botton=useRef()
    useEffect(() => {
if(objeto==null){

     if(initialValues.name=="" || initialValues.description =="" ||
     initialValues.order =="" || image ==""){   
      botton.current.disabled=true
      botton.current.style.cursor='default'
      botton.current.style.opacity=0.5
    }
    else{

        botton.current.disabled=false
      botton.current.style.cursor='pointer'
      botton.current.style.opacity=1
    }

}

else{
    console.log('we')
    setInitialValues({
        name:objeto.name,
        order:objeto.order,
        description:objeto.description,
    })

    setimage(objeto.imagen)
    
}
})

    
    const [error, seterror] = useState({
        name:'',
        imagen:''

    })


const [initialValues, setInitialValues] = useState({
    name: '',
    description: '',
    order: '',
});

console.log(initialValues.name)
const [image, setimage] = useState('')
const handleck = (e, edit) => {
    setInitialValues({ ...initialValues, description: edit.getData() })}



const handleChange = (e) => {
    if (e.target.name === 'name') {
        setInitialValues({ ...initialValues, name: e.target.value })

    }
    if (e.target.name === 'order') {
        setInitialValues({ ...initialValues, order: e.target.value })
    }
    if (e.target.name === 'imagen') {
        if (e.target.files[0].type === "image/jpeg" || e.target.files[0].type === "image/png"){
            setimage(e.target.files[0])
            seterror({...error,imagen:''})
        }
            else{seterror({...error,imagen:'Formato no valido'})}

    }
}

const validation = (e) => {
    if (e.target.name == "name") {
        if (initialValues.name.length <= 4) {
            seterror({...error,name:"Debe contener minimo 4 caracteres"})
            
        }
        else{seterror({...error,name:""})}

    }

    if (e.target.name == "order") {
        if (initialValues.order.length < 1) {
            seterror({...error,order:"Campo obligatorio"})
            
        }
        else{seterror({...error,order:""})}

    }

    
    if (e.target.name == "description") {
        if (initialValues.description.length <= 1) {
            seterror({...error,description:"Campo obligatorio"})
            
        }
        else{seterror({...error,description:""})}

    }
   
}

const validationCk=(e,edit)=>{
    if(edit.getData().length<1){
    seterror({ ...error, description: 'Campo obligatorio' })}
    else{
        seterror({ ...error, description: '' })}
    
}


const handleSubmit = async (e) => {
    const {name,description,order}=initialValues
    
    if(objeto==null){
        try {
         
        axios.post('/Slides/create',{
            name,description,order,image
        })   
        } catch (error) {
            console.log(error)
        }
    }
    else{
        try {
         
        axios.patch(`/Slides/:${objeto.id}`,{
            name,description,order,image
        })   
        } catch (error) {
            
        }
    }
}



return (
    <div>
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Slide Title" onBlur={validation}></input>
            {error.name && error.name }
           
            <input className="input-field" type="text" name="order" value={initialValues.order} onChange={handleChange} onBlur={validation} placeholder="Write order" ></input>
            {error.order && error.order }
            
            <input className="input-field" type="file" name="imagen" value={initialValues.imagen} onChange={handleChange} onBlur={validation} placeholder="upload imagen"></input>
            {error.imagen && error.imagen }
            <CKEditor
                editor={ClassicEditor}
                data={initialValues.description}
                onBlur={validationCk}
                onChange={handleck}

            />
            {error.description && error.description }
            <button ref={botton} className="submit-btn" type="submit">Send</button>
        </form>
    </div>
);
}

export default SlidesForm;