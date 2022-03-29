import React, { useState } from "react";
import { useFormik } from "formik";
import "./EditFormStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  FormLabel,
  FormText,
} from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function EditOrganization() {
  const [valuesForm, setValuesForm] = useState({});

  console.log(valuesForm)

  const validate = (values) => {
    const errores = {};
    validateNameOrganization(values, errores);
    validateLogoOrganization(values, errores);
    validateLongDescription(values, errores);
    validateShortDescription(values, errores);
    validateLinks(values, errores);

    return errores;
  };

  const formik = useFormik({
    initialValues: {
      nameOrganization: "",
      logoOrganization: "",
      shortDescription: "",
      longDescription: "",
      links: "",
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: handleFormSubmit,
  });

  function validateNameOrganization(values, errores) {
    if (!values.nameOrganization) {
      errores.nameOrganization = "Debes ingresar un nombre";
    }
  }

  function validateLogoOrganization(values, errores) {
    if (!values.logoOrganization) {
      errores.logoOrganization = "Debes subir una imagen";

    }else if (!/(.jpg|.JPG|.png|.PNG)/.test(values.logoOrganization)){
        errores.logoOrganization = ' El logo deberá tener un formato .png o .jpg';
    }
  }

  function validateShortDescription(values, errores) {
    if (!values.shortDescription) {
      errores.shortDescription = "Debes ingresar una descripcion corta";
    }
  }

  function validateLongDescription(values, errores) {
    if (!values.longDescription) {
      errores.longDescription = "Debes ingresar una descripción larga";
    }
  }

  function validateLinks(values, errores) {
    if (!values.links) {
      errores.links = "Debes ingresar un link de una red social";
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.links)){
        errores.links = "Debes ingresar un link valido";
    }
  }

  function handleShortDescriptionChange(event, editor) {
    formik.setValues((previous) => {
      previous.shortDescription = editor.getData();
      return previous;
    });
  }

  function handleFormSubmit(values) {
    setValuesForm(values);
  }

  return (
    <div className="my-3 Form-container w-75">
      <div className="text-center mt-2 fs-3">
        <p>Edite los datos de su organizacion</p>
      </div>
      <Container>
        <form onSubmit={formik.handleSubmit} className="">
          <Col>
            <div className="">
              <Row>
                <FormGroup>
                  <FormLabel className="form-label">
                    Nombre de la organizacion
                  </FormLabel>
                  <input
                    type="text"
                    id="inputNombre"
                    placeholder="Ingrese el nombre de la organizacion"
                    className="form-control"
                    name="nameOrganization"
                    value={formik.values.nameOrganization}
                    onChange={formik.handleChange}
                  />
                  <FormText className="badge bg-danger">
                    {formik.errors.nameOrganization}
                  </FormText>
                </FormGroup>
              </Row>
            </div>
            <div className="">
              <Row>
                <FormGroup>
                  <FormLabel className="form-label">
                    Logo de la organizacion
                  </FormLabel>
                  <input
                    type="file"
                    id="inputLogo"
                    name="logoOrganization"
                    className="form-control"
                    value={formik.values.logoOrganization}
                    onChange={formik.handleChange}
                  />
                   <FormText className="badge bg-danger">
                    {formik.errors.logoOrganization}
                  </FormText>
                </FormGroup>
              </Row>
            </div>
            <div className="">
              <Row>
                <FormGroup>
                  <FormLabel>Descripcion corta</FormLabel>
                  <CKEditor
                    editor={ClassicEditor}
                    data={formik.values.shortDescription}
                    onChange={handleShortDescriptionChange}
                  ></CKEditor>
                  <FormText className="badge bg-danger">
                    {formik.errors.shortDescription}
                  </FormText>
                </FormGroup>
              </Row>
            </div>
            <div className="">
              <Row>
                <FormGroup>
                  <FormLabel>Descripcion larga</FormLabel>
                  <textarea
                    placeholder="Agregue una descripcion larga"
                    name="longDescription"
                    className="form-control"
                    value={formik.values.longDescription}
                    onChange={formik.handleChange}
                  />
                  <FormText className="badge bg-danger">
                    {formik.errors.longDescription}
                  </FormText>
                </FormGroup>
              </Row>
            </div>
            <div className="">
              <Row>
                <FormGroup>
                  <FormLabel>Agregue sus redes sociales</FormLabel>
                  <input
                    type="text"
                    placeholder="Links.."
                    name="links"
                    className="form-control"
                    value={formik.values.links}
                    onChange={formik.handleChange}
                  />
                  <FormText className="badge bg-danger">
                    {formik.errors.links}
                  </FormText>
                </FormGroup>
              </Row>
            </div>
            <div className="text-center">
              <Row>
                <Col>
                  <Button className="mt-2 button-form-confirmed" type="submit">
                    Confirmar
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </form>
      </Container>
    </div>
  );
}

export default EditOrganization;
