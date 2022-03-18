import React, {useState} from 'react';
import '../FormStyles.css';
import '../Login/LoginStyles.css'
import { Formik, Form, Field, ErrorMessage } from "formik";


function Login() {

    const [ValuesForm , setValuesForm] = useState({})

    console.log(ValuesForm)
    
    return (
        <div className='form-login'>
        <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          let errores = {};

          if (!values.email) {
            errores.email = "Please enter a email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.email
            )
          ) {
            errores.email =
              "the email can only have letters, numbers, periods, hyphens and underscore";
          }

          if (!values.password) {
            errores.password = "Please enter a password";
          } else if (
              !/^(?=(?:.*\d))(?=.*[A-z])(?=.*[.,*!?¿¡/#$%&])\S{6,25}$/.test(values.password)) 
              {
            errores.password =
              "The password must have a minimum length of 6 characters, and contain at least one number, one letter and one symbol";
          }
          return errores;
        }}
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
                className="controls"
                id="floatingInput"
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
                className="controls"
                id="InputPassword"
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
                className="buttons"
                type="botton"
              >
                Send
              </button>
            </div>
            <div>
              <p><a href='#'>olvidaste tu contraseña?</a></p>
            </div>
          </Form>
        )}
      </Formik>
      </div>
    );
}

export default Login;