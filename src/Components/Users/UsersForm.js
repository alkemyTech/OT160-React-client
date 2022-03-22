import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import { Formik, Field } from 'formik';


const UserForm = ({prevTestUserData}) => {
    const [fileError, setFileError] = useState("");
    const [file, setFile] = useState("");
    const [userData, setUserData] = useState(
      prevTestUserData ? prevTestUserData : {
            id: 1,
            name: '',
            email: '',
            role_id: '',
            profile_image: "",
            password: ""
      });
    const [prevUserDataExist, setPrevUserDataExist] = useState(false);

    useEffect(() => {
      if(prevTestUserData){
        setPrevUserDataExist(true);
      }

    },[userData]);

    const validate = (values) => {
        const errors = {};
        if (values.email === "") {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Email inválido';
        }
    
        if(values.name === ""){
            errors.name = "Agregue su nombre de usuario";
        } else if (values.name.length < 4){
            errors.name = "El nombre de usuario debe ser de al menos 4 caracteres";
        }
    
        if(values.roleId === ""){
            errors.roleId = "Escoja su rol";
        }
    
        if(values.password === ""){
            errors.password = "Ingrese su contraseña";
        } else if(values.password.length < 8){
            errors.password = "La contraseña debe tener un mínimo de 8 caracteres";
        }
        
        return errors;
    };

    const fileHandlerValidation = (e) => {
      const file = e.target.value;
      const allowedExtensions = /(\.jpg|\.png)$/i;
      
      if(!file){
        setFileError("Escoja una foto de perfil");
      } else {
        if (!allowedExtensions.exec(file)) {
          setFileError("La imagen debe ser de formato .jpg o .png");
        } else {
          setFile(file);
        }
      };
    };

    return (
      <Formik
       initialValues={ userData }
       validate= {validate}
       onSubmit={(values) => {
        setUserData({...values, profile_image : file});
        if(prevUserDataExist){
          fetch("https://ongapi.alkemy.org/api/users/" + userData.id, {
            method: "PUT",
            body: JSON.stringify(userData),
            headers : { 
              "Content-Type": "application/json",
              'Accept': 'application/json'
             }
            })
            .then(response => response.json())
            .then(json => console.log(json)); 
        } else {
          fetch("https://ongapi.alkemy.org/api/users",{
            method: "POST",
            body: JSON.stringify(userData),
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
            })
            .then(response => response.json())
            .then(json => console.log(json));
        }
       }}
     >
       {({
         values,
         errors,
         handleChange,
         handleSubmit
       }) => (
        <form className="form-container" onSubmit={handleSubmit}>
            <Field
              className="input-field" 
              name="name" 
              onChange={handleChange}
              value={values.name}
              placeholder="Nombre"
            />
            {errors.name && errors.name}
            <Field
              className="input-field" 
              name="email" 
              onChange={handleChange}
              value={values.email}
              placeholder="Email"
            />
            {errors.email && errors.email}
            <input 
            required
            name="file"
            type="file"
            className="input-field"
            onChange={fileHandlerValidation}
            />
            {fileError !== "" && <p>{fileError}</p>}
            <Field 
              name="roleId"
              as="select"
              className="input-field" 
              value={values.roleId} 
              onChange={handleChange}>
                <option value="" disabled >Escoja su rol</option>
                <option value="1">Admin</option>
                <option value="2">User</option>
            </Field>
            {errors.roleId && errors.roleId}
            <Field
              className="input-field" 
              type="password"
              name="password"
              placeholder='Contraseña'
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && errors.password}
            <button className="submit-btn" type="submit">Send</button>
          </form>
       )}
      </Formik>
    );
}
 
export default UserForm;