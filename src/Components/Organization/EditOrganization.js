import React from "react";
import { useFormik } from "formik";
import "./EditFormStyles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Button,
  FormGroup,
  FormLabel,
  FormText,
} from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {nameValidation, fileValidationExtensions} from '../../Services/formValidationsService';
import BackofficeHeader from "../Header/BackofficeHeader";

function EditOrganization() {

  const validate = (values) => {
    const errors = {};
    nameValidation(values.name, errors);
    fileValidationExtensions(values.image, errors);
    validateLongDescription(values, errors);
    validateShortDescription(values, errors);
    validateLinks(values, errors);

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      shortDescription: "",
      longDescription: "",
      links: "",
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: handleFormSubmit,
  });

  function validateShortDescription(values, errores) {
    if (!values.shortDescription) {
      errores.shortDescription = "Debes ingresar una descripcion corta";
    }
  };

  function validateLongDescription(values, errores) {
    if (!values.longDescription) {
      errores.longDescription = "Debes ingresar una descripción larga";
    }
  };

  function validateLinks(values, errores) {
    if (!values.links) {
      errores.links = "Debes ingresar un link de una red social";
    }
    else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.links)) {
      errores.links = "Debes ingresar un link valido";
    }
  };

  function handleShortDescriptionChange(event, editor) {
    formik.setValues((previous) => {
      previous.shortDescription = editor.getData();
      return previous;
    });
  };

  function handleFormSubmit(values) {
    //Implementar submit
  };

  return (
    <div>
      <BackofficeHeader />
    <div className="my-3 form-container">
      <div className="text-center mt-2 fs-3">
        <p>Edite los datos de su organizacion</p>
      </div>
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
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  <FormText className="badge bg-danger">
                    {formik.errors.name}
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
                    name="image"
                    className="form-control"
                    value={formik.values.image}
                    onChange={formik.handleChange}
                  />
                  <FormText className="badge bg-danger">
                    {formik.errors.image}
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
    </div>
    </div>
  );
}

export default EditOrganization;
