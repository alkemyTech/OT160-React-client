import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import { Formik } from 'formik';
import {
  emailValidation, 
  passwordValidationEightLength, 
  confirmedPasswordValidation, 
  errors} from "../../Services/formValidation";
const RegisterForm = () => {

    const [registerData, setRegisterData] = useState([]);

    const validate = values => {
        emailValidation(values.email);

        passwordValidationEightLength(values.password);

        confirmedPasswordValidation(values.password, values.confirmedPassword)
        
        const validationErrors = errors;

        return validationErrors;
    };
    
    return (
        <div>
            <Formik 
            initialValues={{
                email: "",
                password: "",
                confirmedPassword: "",
            }} 
            validate = {validate}
            onSubmit = {(values) => {
              setRegisterData(values);
              localStorage.setItem('token', 'tokenValueExample');
            }}>
            {({
                values,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form className="form-container" onSubmit={handleSubmit}>
                    <input className="input-field" type="text" name="email" value={values.name} onBlur={handleBlur} onChange={handleChange} placeholder="Enter email"></input>
                    {errors.email && <div>{errors.email}</div>}
                    <input className="input-field" type="password" name="password" value={values.password} onBlur={handleBlur} onChange={handleChange} placeholder="Enter password"></input>
                    {errors.password && <div>{errors.password}</div>}
                    <input className="input-field" type="password" name="confirmedPassword" value={values.confirmedPassword} onBlur={handleBlur} onChange={handleChange} placeholder="Confirm password"></input>
                    {errors.confirmedPassword && <div>{errors.confirmedPassword}</div>}
                    <button className="submit-btn" type="submit">Log In</button>
                </form>
              )}
            </Formik>
        </div>
    );



    
}
 
export default RegisterForm;