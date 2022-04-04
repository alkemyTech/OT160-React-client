import React from "react";
import { useFormik } from "formik";
import { emailValidator } from "../../Services/formValidationsService";
import "../FormStyles.css";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: handleFormSubmit,
  });

  function validate(values) {
    const errors = {};

    validateName(values.name, errors);
    validateEmail(values.email, errors);
    validatePhone(values.phone, errors);
    validateMessage(values.message, errors);

    return errors;
  }

  function handleFormSubmit(values) {
    console.log(values); // Service to be implemented
  }

  function validateName(name, errors) {
    if (!name) {
      errors.name = "Debes ingresar un nombre";
    }
  }

  function validateEmail(email, errors) {
    if (!email) {
      errors.email = "Debes ingresar una dirección de email";
    } else if (!emailValidator.isValid(email)) {
      errors.email = emailValidator.error;
    }
  }

  function validatePhone(phone, errors) {
    if (!phone) {
      errors.phone = "Debes ingresar un nro de teléfono";
    } else if (/[^0123456789]/.test(phone)) {
      errors.phone = "Sólo puedes ingresar números";
    } else if (phone.length < 8) {
      errors.phone = "El número debe tener al menos 8 dígitos";
    }
  }

  function validateMessage(message, errors) {
    if (!message) {
      errors.message = "Debes escribir algún mensaje para enviar";
    }
  }

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <div className="form-input-div">
        <input
          className="input-field"
          name="name"
          placeholder="Tu nombre"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <p className="error-message">{formik.errors.name}</p>
      </div>

      <div className="form-input-div">
        <input
          className="input-field"
          name="email"
          placeholder="Dirección de email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <p className="error-message">{formik.errors.email}</p>
      </div>

      <div className="form-input-div">
        <input
          className="input-field"
          name="phone"
          placeholder="Número de teléfono"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        <p className="error-message">{formik.errors.phone}</p>
      </div>

      <div className="form-input-div">
        <textarea
          className="input-field"
          name="message"
          placeholder="Escribe aquí tu mensaje..."
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        <p className="error-message">{formik.errors.message}</p>
      </div>

      <button className="submit-btn" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;