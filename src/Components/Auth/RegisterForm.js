import React, { useEffect, useState } from 'react';
import '../FormStyles.css';
import { Formik } from 'formik';
import {
  nameValidation,
  lastNameValidation,
  emailValidation, 
  passwordValidationEightLength, 
  passwordValidationSpecialCharacters,
  confirmedPasswordValidation,
  termsValidation 
  } from "../../Services/formValidationsService";
import {createUser} from "../../Services/userApiService";
import { Terms } from './Terms';

const RegisterForm = () => {
    const [registerData, setRegisterData] = useState([]);
    const [showErrortermins, setShowErrortermins] = useState(true)

    const validate = values => {
      const errors = {};
      nameValidation(values.name, errors);
      lastNameValidation(values.lastName, errors);
      emailValidation(values.email, errors);
      passwordValidationSpecialCharacters(values.password, errors);
      passwordValidationEightLength(values.password, errors);
      confirmedPasswordValidation(values.password, values.confirmedPassword, errors)
      termsValidation(values.name, errors)
      return errors;
    };
    
    return (
        <div>
            <Formik 
            initialValues={{
                name: "",
                lastName: "",
                email: "",
                password: "",
                confirmedPassword: "",
            }} 
            validate = {validate}
            onSubmit = {(values) => {
              createUser(values);
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
                    <input aria-label='name' className="input-field" type="text" name="name" value={values.name} onChange={handleChange} placeholder="Nombre"></input>
                    {errors.name && <div>{errors.name}</div>}
                    <input aria-label='lastName' className="input-field" type="text" name="lastName" value={values.lastName} onChange={handleChange} placeholder="Apellido"></input>
                    {errors.lastName && <div>{errors.lastName}</div>}
                    <input aria-label='email' className="input-field" type="text" name="email" value={values.email} onBlur={handleBlur} onChange={handleChange} placeholder="Mail"></input>
                    {errors.email && <div>{errors.email}</div>}
                    <input aria-label='password' className="input-field" type="password" name="password" value={values.password} onBlur={handleBlur} onChange={handleChange} placeholder="Contrase??a"></input>
                    {errors.password && <div>{errors.password}</div>}
                    <input aria-label='confirmedPassword' className="input-field" type="password" name="confirmedPassword" value={values.confirmedPassword} onBlur={handleBlur} onChange={handleChange} placeholder="Confirmar contrase??a"></input>
                    {errors.confirmedPassword && <div>{errors.confirmedPassword}</div>}
                    {errors.terms && <Terms showErrorTermins={setShowErrortermins}/>}
                    {(errors.terms && showErrortermins) && <div>{errors.terms}</div> }  
                    <button className="submit-btn" type="submit">Register</button>
                </form>
              )}
            </Formik>
        </div>
    );  
}
 
export default RegisterForm;