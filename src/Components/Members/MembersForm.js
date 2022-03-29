import React, { useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import PreviewImage from './PreviewImage';
import '../FormStyles.css';

const MembersForm = () => {

  const [sentForm, changeSentForm] = useState(false);
  const [editMember, setEditMember] = useState(false);

  const memberEditMock = {
    name: 'Fer Leiva',
    description: '<p>Description <strong>example</strong></p>',
    linkedIn: 'https://www.linkedin.com/in/effeleiva/',
    gitHub: 'https://github.com/FerLeiva/',
};

  const fileRef = useRef(null);

  const validateName = (values, errors) => {
    if(!values.name){
        errors.name = 'Por favor escribe un nombre.'
    } else if(values.name.length <= 3){
        errors.name = 'El nombre debe contener mas de tres caracteres.'
    };
  };
  const validateDescription = (values, errors) => {
    if(!values.description){
        errors.description = 'Por favor escribe una descripcion.'
    };
  };
  const validateImage = (values, errors, supportedFormats) => {
        if(values.image === null){
            errors.image = 'Por favor sube una imagen.'
        } else if(!supportedFormats.includes(values.image.type)){
            errors.image = 'Las imagenes deben ser en formato .jpg, .jpeg o .png .'
        } else if(values.image.size > 1000000){
            errors.image = 'El tamaño de la imagen no puede ser mayor a 1mb.'
        };
    };  
  const validateLinkedIn = (values, errors) => {
    if(!values.linkedIn){
        errors.linkedIn = 'Por favor proporciona una cuenta de LinkedIn.'
    } else if(!values.linkedIn.match(/(https?:\/\/(www.)|(www.))?linkedin.com\/(mwlite\/|m\/)?in\/[a-zA-Z0-9_.-]+\/?/)){
        errors.linkedIn = 'Por favor proporciona una cuenta de LinkedIn valida.'
    };
  };
  const validateGitHub = (values, errors) => {
    if(!values.gitHub){
        errors.gitHub = 'Por favor proporciona una cuenta de GitHub.'
    } else if(!values.gitHub.match(/(https?:\/\/(www.)|(www.))?github.com\/[a-zA-Z0-9_.-]+\/?/)){
        errors.gitHub = 'Por favor proporciona una cuenta de GitHub valida.'
    };
  };

  return (

    <>
            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    image: null,
                    linkedIn: '',
                    gitHub: '',
                }}
                validate={(values) => {
                    const errors = {};
                    const supportedFormats = ["image/jpg", "image/jpeg", "image/png"];
                    validateName(values, errors);
                    validateDescription(values, errors);
                    validateImage(values, errors, supportedFormats);
                    validateLinkedIn(values, errors);
                    validateGitHub(values, errors);
                    return errors;
                }}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    changeSentForm(true);
                    setTimeout(() => changeSentForm(false), 5000);
                    resetForm();
                }}
            >
                {({ values, errors, setFieldValue, }) => {
                    if (editMember) {
                        values.name = memberEditMock.name;
                        values.description = memberEditMock.description;
                        values.linkedIn = memberEditMock.linkedIn;
                        values.gitHub = memberEditMock.gitHub;
                    };
                    return (
                        <Form className="form-container">
                            <div className="form-group">
                                <label htmlFor='name'>Name</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder={"Escribe un nombre"}
                                />
                                <ErrorMessage name="name" component={() => (
                                    <div className="error">{errors.name}</div>
                                )} />
                            </div>
                            <div className="form-group">
                                <label htmlFor='description'>Description</label>
                                <Field
                                    className="form-control"
                                    id="description"
                                    name="description"
                                >
                                    {() => {
                                        return (
                                            <>
                                                <CKEditor
                                                    editor={ ClassicEditor }
                                                    config={{placeholder: "Escribe una descripcion"}} 
                                                    data={values.description}
                                                    onChange={(e, editor) => {
                                                        values.description= editor.getData();
                                                    }}
                                                />
                                            </>
                                        );
                                    }}
                                </Field>
                                <ErrorMessage name="description" component={() => (
                                    <div className="error">{errors.description}</div>
                                )} />
                            </div>
                            <div className="form-group">
                                <label htmlFor='linkedIn'>LinkedIn</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    id="linkedIn"
                                    name="linkedIn"
                                    placeholder={"LinkedIn URL"}
                                />
                                <ErrorMessage name="linkedIn" component={() => (
                                    <div className="error">{errors.linkedIn}</div>
                                )} />
                            </div>
                            <div className="form-group">
                                <label htmlFor='gitHub'>GitHub</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    id="gitHub"
                                    name="gitHub"
                                    placeholder={"GitHub URL"}
                                />
                                <ErrorMessage name="gitHub" component={() => (
                                    <div className="error">{errors.gitHub}</div>
                                )} />
                            </div>
                            <div className="label-container">
                                <input
                                    ref={fileRef}
                                    hidden
                                    className="form-control-file"
                                    type="file"
                                    onChange={(e) => {
                                        setFieldValue("image", e.target.files[0]);
                                    }}
                                />
                                    {values.image && <PreviewImage image={values.image}/>}
                                <button
                                    type="button"
                                    className='btn btn-outline-danger'
                                    onClick={() => {
                                        fileRef.current.click();
                                    }}
                                >
                                    Sube una imagen
                                </button>
                                <ErrorMessage name="image" component={() => (
                                    <div className="error">{errors.image}</div>
                                )} />
                            </div>
                            <button className="btn btn-danger" type="submit">Enviar</button>
                            {sentForm && <p className='success'>Formulario enviado correctamente</p>}
                        </Form>
                    )
                }}
            </Formik>
        </>
  );
}
 
export default MembersForm;

// import React, { useRef, useState } from 'react';
// import '../../Components/FormStyles.css';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import Previewimage from './PreviewImage';

// let id = false;

// const NewsForm = () => {
//     // This state is for testing the form when submitted, it will be removed later.
//     const [sentForm, changeSentForm] = useState(false);

//     // The following code is a first approximation of how the form will act if it
//     // recieves an id (editting form), or not (creation form). To test it, set
//     // the variable id outise this component to true.
//     const IsEdit = (values) => {
//         let newsEditMock = {
//             name: 'Title example',
//             description: '<p>Content <strong>example</strong></p>',
//             links: '2',
//         };
//         if (id === true) {
//             values.name = newsEditMock.name;
//             values.description = newsEditMock.description;
//             values.links = newsEditMock.links;
//             id=false;
//         };
//     };

//     const fileRef = useRef(null);

//     // This array of objects is for testing the links map. It will be replaced
//     // with the existing categories in the endpoint/categories when existing.
//     const categoriesMock = [
//         {id: 1, name: 'Demo option 1'},
//         {id: 2, name: 'Demo option 2'},
//         {id: 3, name: 'Demo option 3'},
//     ];

//     return (
        
//     );
// };
 
// export default NewsForm;