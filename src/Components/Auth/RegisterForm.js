import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import { Formik } from 'formik';

const RegisterForm = () => {

    const [loginData, setLoginData] = useState([]);

    useEffect(() => {
        if(Object.keys(loginData) !== 0) {
            console.log(loginData);
        }
    },[loginData]);

    const validate = values => {
        const errors = {};
      
        if (!values.email) {
          errors.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = "Invalid email";
        }

        if (!values.password) {
          errors.password = "Required";
        } else if (values.password.length < 7){
          errors.password = "The password must have at least 6 characters";
        }else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(values.password)) {
          errors.password = "The password must have at least a number, a special character and a letter";
        }

        if (!values.confirmedPassword) {
          errors.confirmedPassword = "Please, confirm your password";
        } else if (values.confirmedPassword !== values.password){
          errors.confirmedPassword = "The passwords do not coincide, please check again";
        }
        
        return errors;
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
                setLoginData(values);
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