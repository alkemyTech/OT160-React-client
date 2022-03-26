import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import { Formik, Field } from "formik";
import {
  emailValidation, 
  nameValidationFourLength, 
  passwordValidationEightLength, 
  fileValidation_JPG_PNG, 
  errors
} from "../../Services/formValidationService";
import {
  postUser,
  putUser
} from "../../Services/privateApiService";

const UserForm = ({prevTestUserData}) => {
    const [fileError, setFileError] = useState("");
    const [file, setFile] = useState("");
    const [userData, setUserData] = useState(
      prevTestUserData ? prevTestUserData : {
            id: 3,
            name: '',
            email: '',
            role_id: '',
            profile_image: "",
            password: ""
      });
    const [prevUserDataExist, setPrevUserDataExist] = useState(false);
    const [makeRequest, setMakeRequest] = useState(false);

    useEffect(() => {
      if(prevTestUserData){
        setPrevUserDataExist(true);
      }

      if(makeRequest){
        if(prevUserDataExist){
          putUser(userData);
        } else {
          postUser(userData);
        }
      }

    },[userData, makeRequest]);

    const validate = (values) => {
        emailValidation(values.email);
    
        nameValidationFourLength(values.name);
        
        passwordValidationEightLength(values.password);

        const validationErrors = errors;
        return validationErrors;
    };


    const fileHandlerValidation = (e) => {
      const file = e.target.value;
      const errorMessage = fileValidation_JPG_PNG(e);
      if(errorMessage !== ""){
        setFileError(errorMessage);
      } else {
        setFile(file);
      }
    };

    return (
      <Formik
       initialValues={ userData }
       validate= {validate}
       onSubmit={(values) => {
        setUserData({...values, profile_image : file});
        setMakeRequest(true);
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
            {fileError && <p>{fileError}</p>}
            <Field 
              required
              name="role_id"
              as="select"
              className="input-field" 
              value={values.role_id} 
              onChange={handleChange}>
                <option value="" disabled >Escoja su rol</option>
                <option value="1">Admin</option>
                <option value="2">User</option>
            </Field>
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