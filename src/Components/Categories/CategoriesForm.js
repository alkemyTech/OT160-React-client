import React from "react";
import { useFormik } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { patch, post } from "../../Services/privateApiService";
import { fileValidationExtensions } from "../../Services/formValidationsService";
import "../FormStyles.css";

const CategoriesForm = (props) => {
  const { category } = props;

  const formik = useFormik({
    initialValues: {
      name: category?.name || "",
      description: category?.description || "",
      image: category?.image || "",
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: handleFormSubmit,
  });

  function handleDescriptionChange(event, editor) {
    formik.setValues((previous) => {
      previous.description = editor.getData();
      return previous;
    });
  }

  function handleFormSubmit(values) {
    if (category) {
      patch(`/categories/${category.id}`, values); // Service to be implemented
    } else {
      post("/categories", values); // Service to be implemented
    }
  }

  function validateName(name, errors) {
    if (!name) {
      errors.name = "Debes ingresar un nombre";
    } else if (name.length < 4) {
      errors.name = "El nombre debe tener al menos 4 caracteres";
    }
  }

  function validateDescription(description, errors) {
    if (!description) {
      errors.description = "Debes ingresar una descripción";
    }
  }
  
  function validate(values) {
    const errors = {};

    validateName(values.name, errors);
    validateDescription(values.description, errors);
    fileValidationExtensions(values.image, errors);
  
    return errors;
  }

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <div className="form-input-div">
        <input
          className="input-field"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Nombre de la categoría"
        />
        <p className="error-message">{formik.errors.name}</p>
      </div>

      <div className="form-input-div">
        <CKEditor
          editor={ClassicEditor}
          data={formik.values.description}
          onChange={handleDescriptionChange}
        ></CKEditor>
        <p className="error-message">{formik.errors.description}</p>
      </div>

      <div className="form-input-div">
        <div className="file-input-div">
          <label>Imagen de la categoría</label>
          <input
            className="input-field"
            type="file"
            name="image"
            value={formik.values.image}
            onChange={formik.handleChange}
          />
        </div>
        <p className="error-message">{formik.errors.image}</p>
      </div>

      <button className="submit-btn" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default CategoriesForm;
