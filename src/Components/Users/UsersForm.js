import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import { Formik, Field } from 'formik';
import {
  emailValidation,
  nameValidation,
  nameValidationFourLength,
  passwordValidationEightLength,
  fileValidationExtensions,
} from '../../Services/formValidationsService';
import { updateUserData, createUser } from '../../Services/userApiService';
import PublicHeader from '../Header/PublicHeader';

const UserForm = ({ prevUserData }) => {
  const initialUserData = {
    id: 1,
    name: '',
    email: '',
    role_id: '',
    profile_image: '',
    password: '',
  };
  const [prevUserDataExist, setPrevUserDataExist] = useState(false);

  useEffect(() => {
    if (prevUserData) {
      setPrevUserDataExist(true);
    }
  }, [prevUserData]);

  const validate = (values) => {
    const errors = {};
    emailValidation(values.email, errors);
    nameValidationFourLength(values.name, errors);
    nameValidation(values.name, errors);
    passwordValidationEightLength(values.password, errors);
    fileValidationExtensions(values.profile_image, errors);

    return errors;
  };

  const onSubmitHandler = async (values) => {
    const newUserData = {
      ...values,
      role_id: parseInt(values.role_id),
    };
    if (prevUserDataExist) {
      updateUserData(newUserData);
    } else {
      createUser(newUserData);
    }
  };

  return (
    <div>
      <PublicHeader />
      <Formik
        initialValues={prevUserData || initialUserData}
        validate={validate}
        onSubmit={onSubmitHandler}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
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
              name="profile_image"
              type="file"
              className="input-field"
              value={values.profile_image}
              onChange={handleChange}
            />
            {errors.image && errors.image}
            <Field
              required
              name="role_id"
              as="select"
              className="input-field"
              value={values.role_id}
              onChange={handleChange}
            >
              <option value="" disabled>
                Escoja su rol
              </option>
              <option value="1">Admin</option>
              <option value="2">User</option>
            </Field>
            <Field
              className="input-field"
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && errors.password}
            <button className="submit-btn" type="submit">
              Send
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
