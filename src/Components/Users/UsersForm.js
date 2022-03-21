import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import { Formik, Field } from 'formik';
import { v4 as uuidv4 } from 'uuid';


const UserForm = ({prevTestUserData}) => {

    /* const prevTestUserData = {
      id: 2,
      name: 'James',
      email: 'james@gmail.com',
      roleId: '1',
      profilePicture: "/picture/dummy.png",
      password: "password"
    };  */

    const [fileError, setFileError] = useState("");
    const [file, setFile] = useState("");
    const [userData, setUserData] = useState(
      prevTestUserData ? prevTestUserData : {
            id: uuidv4,
            name: '',
            email: '',
            roleId: '',
            profilePicture: "",
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
          errors.email = 'Invalid email address';
        }
    
        if(values.name === ""){
            errors.name = "Please add your username";
        } else if (values.name.length < 4){
            errors.name = "The username musth have at least 4 characters";
        }
    
        if(values.roleId === ""){
            errors.roleId = "Choose your role";
        }
    
        if(values.password === ""){
            errors.password = "Please enter your password";
        } else if(values.password.length < 8){
            errors.password = "The password must have a minimum of 8 characters";
        }
        
        return errors;
    };

    const fileHandlerValidation = (e) => {
      const file = e.target.value;
      const allowedExtensions = /(\.jpg|\.png)$/i;
      
      if(!file){
        setFileError("Please upload a profile picture");
      } else {
        if (!allowedExtensions.exec(file)) {
          setFileError("Invalid extensiom, the image must be in .jpg or .png format");
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
        setUserData({...values, profilePicture : file});
        if(prevUserDataExist === true){
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
              placeholder="Name"
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
                <option value="" disabled >Select the role</option>
                <option value="1">Admin</option>
                <option value="2">User</option>
            </Field>
            {errors.roleId && errors.roleId}
            <Field
              className="input-field" 
              type="password"
              name="password"
              placeholder='Password'
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