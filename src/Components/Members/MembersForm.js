import React from 'react';
import { useFormik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../FormStyles.css';
import {
  fileValidationExtensions,
  isUrlValid,
} from '../../Services/formValidationsService';
import { createMember, editMember } from '../../Services/membersService';

const MembersForm = (props) => {
  const { member } = props;

  const formik = useFormik({
    initialValues: {
      name: member?.name || '',
      description: member?.description || '',
      image: member?.image || '',
      facebookUrl: member?.facebookUrl || '',
      linkedinUrl: member?.linkedinUrl || '',
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
    if (member) {
      editMember(values);
    } else {
      createMember(values);
    }
  }

  function validateName(name, errors) {
    if (!name) {
      errors.name = 'Debes ingresar un nombre';
    } else if (name.length < 4) {
      errors.name = 'El nombre debe tener al menos 4 caracteres';
    }
  }

  function validateDescription(description, errors) {
    if (!description) {
      errors.description = 'Debes ingresar una descripción';
    }
  }

  function validateFacebook(url, errors) {
    if (!url) {
      errors.facebookUrl = 'Debes ingresar un usuario de Facebook';
    } else if (!isUrlValid(url)) {
      errors.facebookUrl = 'La url ingresada no es válida';
    }
  }

  function validateLinkedin(url, errors) {
    if (!url) {
      errors.linkedinUrl = 'Debes ingresar un usuario de LinkedIn';
    } else if (!isUrlValid(url)) {
      errors.linkedinUrl = 'La url ingresada no es válida';
    }
  }

  function validate(values) {
    const errors = {};

    validateName(values.name, errors);
    validateDescription(values.description, errors);
    fileValidationExtensions(values.image, errors);
    validateFacebook(values.facebookUrl, errors);
    validateLinkedin(values.linkedinUrl, errors);

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
          placeholder="Nombre del miembro"
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
          <label>
            Imagen del miembro
            <input
              className="input-field"
              type="file"
              name="image"
              value={formik.values.image}
              onChange={formik.handleChange}
            />
          </label>
        </div>
        <p className="error-message">{formik.errors.image}</p>
      </div>

      <div className="form-input-div">
        <input
          className="input-field"
          type="text"
          name="facebookUrl"
          value={formik.values.facebookUrl}
          onChange={formik.handleChange}
          placeholder="Direccion de Facebook"
        />
        <p className="error-message">{formik.errors.facebookUrl}</p>
      </div>

      <div className="form-input-div">
        <input
          className="input-field"
          type="text"
          name="linkedinUrl"
          value={formik.values.linkedinUrl}
          onChange={formik.handleChange}
          placeholder="Direccion de Linkedin"
        />
        <p className="error-message">{formik.errors.linkedinUrl}</p>
      </div>

      <button className="submit-btn" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default MembersForm;
