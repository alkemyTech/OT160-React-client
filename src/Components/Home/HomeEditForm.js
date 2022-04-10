import React, { useState } from "react";
import { Formik, Form } from "formik";
import "../FormStyles.css";
import SlidesForm from "../Slides/SlidesForm.js";
import InputForm from "./InputForm.js";

export default function HomeEditForm() {
  const [valuesForm, setValuesForm] = useState({});

  function checkNumber(sliceId) {
    return !/^[0-9]+$/.test(sliceId);
  }

  const validate = (values) => {
    const errors = {};
    validateWelcomeText(values, errors);
    validateSlideId(values, errors , 1);
    validateSlideId(values, errors , 2);
    validateSlideId(values, errors , 3);
    return errors;
  };

  const validateWelcomeText = (values, errors) => {
    if (!values.welcomeText) {
      errors.welcomeText = "you have written nothing";
    } else if (values.welcomeText.length < 20) {
      errors.welcomeText = "Title must be longer than 20 characters";
    }
  };



    const validateSlideId = (values, errors, id) => {
    
      if(id===1)
      {
        if (checkNumber(values.slideId_1)) {
          errors.slideId_1 = "The id can't have letters, only numbers";
        }
      }else if(id===2)
      {
        if (checkNumber(values.slideId_2)) {
          errors.slideId_2 = "The id can't have letters, only numbers";
        }
      }else
      {
        if (checkNumber(values.slideId_3)) {
          errors.slideId_3 = "The id can't have letters, only numbers";
        }
      }

  };

  return (
    <div>
      <Formik
        initialValues={{
          welcomeText: "",
          slideId_1: "",
          slideId_2: "",
          slideId_3: "",
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          setValuesForm(values);
        }}
        validate={validate}
      >
        {(props) => (
          <div>
            <Form className="form-container">
              <InputForm
                type="text"
                id="welcomeText"
                props={props}
                placeholder="Welcome Text"
                value={props.values.welcomeText}
                error={props.errors.welcomeText}
                className="input-field"
              />

              <InputForm
                type="text"
                id="slideId_1"
                props={props}
                placeholder="slide id-1"
                value={props.values.slideId_1}
                error={props.errors.slideId_1}
              />
              <InputForm
                type="text"
                id="slideId_2"
                props={props}
                placeholder="slide id-2"
                value={props.values.slideId_2}
                error={props.errors.slideId_2}
              />
              <InputForm
                type="text"
                id="slideId_3"
                props={props}
                placeholder="slide id-3"
                value={props.values.slideId_3}
                error={props.errors.slideId_3}
              />

              <button className="submit-btn" type="submit">
                Submit
              </button>
            </Form>
          </div>
        )}
      </Formik>

      <SlidesForm object={{ id: valuesForm.sliceId_1 }} />
      <SlidesForm object={{ id: valuesForm.sliceId_2 }} />
      <SlidesForm object={{ id: valuesForm.sliceId_3 }} />
      <h1>{valuesForm.welcomeText}</h1>
    </div>
  );
}
