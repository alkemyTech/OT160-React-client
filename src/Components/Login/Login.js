import React, {useState} from 'react';
import '../FormStyles.css';
import '../Login/LoginStyles.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import PublicHeader from "../Header/PublicHeader";


function Login() {
    const [valuesForm , setValuesForm] = useState({});

    const validate = values => {
      const errores = {};
      validateEmail(values, errores);
      validatePassword(values, errores)

      return errores;
    };
    
    const validateEmail = (values, errores) => {
      if (!values.email) {
        errores.email = "Please enter a email";
      } else if (
        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
          values.email
        )
      ) {
        errores.email =
          "The email can only have letters, numbers, periods, hyphens and underscore";
      }
    };
    
    const validatePassword = (values, errores) => {
      if (!values.password) {
        errores.password = "Please enter a password";
      } else if (
          !/^(?=(?:.*\d))(?=.*[A-z])(?=.*[.,*!?¿¡/#$%&])\S{6,25}$/.test(values.password)) 
          {
        errores.password =
          "The password must have a minimum length of 6 characters, and contain at least one number, one letter and one symbol";
      }
    };
    
    return (
      <div>
        <PublicHeader />
        <div className='form-login'>
        <Formik
        initialValues={{
          email: "",
          password: "",
        }}

        validate={validate}

        onSubmit={(values, { resetForm }) => {
          resetForm();
          setValuesForm(values)
        }}
      >
        {({ errors }) => (
          <Form>
            <div>
              <h5>Formulario Login</h5>
            </div>
            <div className="">
              <Field
                type="email"
                className="input-login"
                id="Inputemail"
                name="email"
                placeholder="name@example.com"
              />
              
              <ErrorMessage
                name="email"
                component={() => (
                  <div className="">{errors.email}</div>
                )}
              />
            </div>
            <div className="">
              <Field
                type="password"
                className="input-login"
                id="Inputpassword"
                name="password"
                placeholder="Password"
              />
             
            <ErrorMessage
              name="password"
              component={() => (
                <div className="">{errors.password}</div>
              )}
            />
            </div>
            <div className="">
              <button
                className="button-login"
                type="botton"
              >
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
      </div>
      </div>
    );
}

export default Login;