import React, { useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import '../FormStyles.css';

const MembersForm = () => {

  const [sentForm, changeSentForm] = useState(false);

  const fileRef = useRef(null);

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
                    let errors = {};
                    const supportedFormats = ["image/jpg", "image/jpeg", "image,png"];

                    if(!values.name){
                        errors.name = 'Please write a name for your news.'
                    } else if(values.name.length <= 3){
                        errors.name = 'Title must be longer than three characters.'
                    };

                    if(!values.linkedIn){
                        errors.linkedIn = 'Please provide your LinkedIn account.'
                    } else if(!values.linkedIn.match(/(https?:\/\/(www.)|(www.))?linkedin.com\/(mwlite\/|m\/)?in\/[a-zA-Z0-9_.-]+\/?/)){
                        errors.linkedIn = 'Please provide a valid LinkedIn account.'
                    };
                    
                    if(!values.gitHub){
                        errors.gitHub = 'Please provide your GitHub account.'
                    } else if(!values.gitHub.match(/(https?:\/\/(www.)|(www.))?github.com\/[a-zA-Z0-9_.-]+\/?/)){
                        errors.gitHub = 'Please provide a valid GitHub account.'
                    };

                    if(!values.description){
                        errors.description = 'Please write a description for your news.'
                    };

                    if(values.image === null){
                        errors.image = 'Please upload an image for your news.'
                    } else if(!supportedFormats.includes(values.image.type)){
                        errors.image = 'Images must be in .jpg, .jpeg or .png format.'
                    } else if(values.image.size > 1000000){
                        errors.image = 'Image size must be smaller than 1mb.'
                    };

                    console.log(errors)
                    return errors;
                }}
                // This onSubmit is for testing the form, it logs a success message 
                // and the initialValues, yhen resets them. It'll be adapted later
                onSubmit={(values, { resetForm }) => {
                    console.log('Form sent');
                    console.log(values);
                    changeSentForm(true);
                    setTimeout(() => changeSentForm(false), 5000);
                    resetForm();
                }}
            >
                {({ values, errors, setFieldValue, }) => {
                    

                    return (
                        <Form>
                            <div class="form-group">
                                <label htmlFor='name'>Name</label>
                                <Field
                                    class="form-control"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder={"Add a name"}
                                />
                                <ErrorMessage name="name" component={() => (
                                    <div className="error">{errors.name}</div>
                                )} />
                            </div>
                            <div class="form-group">
                                <label htmlFor='description'>Description</label>
                                <Field
                                    class="form-control"
                                    id="description"
                                    name="description"
                                >
                                    {() => {
                                        return (
                                            <>
                                                <CKEditor
                                                    editor={ ClassicEditor }
                                                    config={{placeholder: "Write a description for your news"}} 
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
                            <div class="form-group">
                                <label htmlFor='linkedIn'>LinkedIn</label>
                                <Field
                                    class="form-control"
                                    type="text"
                                    id="linkedIn"
                                    name="linkedIn"
                                    placeholder={"LinkedIn URL"}
                                />
                                <ErrorMessage name="linkedIn" component={() => (
                                    <div className="error">{errors.linkedIn}</div>
                                )} />
                            </div>
                            <div class="form-group">
                                <label htmlFor='gitHub'>GitHub</label>
                                <Field
                                    class="form-control"
                                    type="text"
                                    id="gitHub"
                                    name="gitHub"
                                    placeholder={"GitHub URL"}
                                />
                                <ErrorMessage name="gitHub" component={() => (
                                    <div className="error">{errors.gitHub}</div>
                                )} />
                            </div>
                            <div class="form-group">
                                <label htmlFor='image'>Image</label>
                                <input
                                    ref={fileRef}
                                    hidden
                                    class="form-control"
                                    type="file"
                                    onChange={(e) => {
                                        setFieldValue("image", e.target.files[0]);
                                    }}
                                />
                               
                                <button
                                    type="button"
                                    onClick={() => {
                                        fileRef.current.click();
                                    }}
                                >
                                    Upload image
                                </button>
                                <ErrorMessage name="image" component={() => (
                                    <div className="error">{errors.image}</div>
                                )} />
                            </div>
                            <button className="submit-btn" type="submit">Send</button>
                            {sentForm && <p className='success'>Form sent successfully!</p>}
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