import React, { useRef, useState } from 'react';
import '../../Components/FormStyles.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Previewimage from './PreviewImage';

let id = false;

const NewsForm = () => {
    // This state is for testing the form when submitted, it will be removed later.
    const [sentForm, changeSentForm] = useState(false);

    // The following code is a first approximation of how the form will act if it
    // recieves an id (editting form), or not (creation form). To test it, set
    // the variable id outise this component to true.
    const IsEdit = (values) => {
        let newsEditMock = {
            title: 'Title example',
            content: '<p>Content <strong>example</strong></p>',
            category: '2',
        };
        if (id === true) {
            values.title = newsEditMock.title;
            values.content = newsEditMock.content;
            values.category = newsEditMock.category;
            id=false;
        };
    };

    const fileRef = useRef(null);

    // This array of objects is for testing the category map. It will be replaced
    // with the existing categories in the endpoint/categories when existing.
    const categoriesMock = [
        {id: 1, name: 'Demo option 1'},
        {id: 2, name: 'Demo option 2'},
        {id: 3, name: 'Demo option 3'},
    ];

    return (
        <>
            <Formik
                initialValues={{
                    title: '',
                    content: '',
                    category: '',
                    image: null
                }}
                validate={(values) => {
                    let errors = {};
                    const supportedFormats = ["image/jpg", "image/jpeg", "image,png"];

                    if(!values.title){
                        errors.title = 'Please write a title for your news.'
                    } else if(values.title.length <= 3){
                        errors.title = 'Title must be longer than three characters.'
                    };

                    if(!values.category){
                        errors.category = 'Please select a category for your news.'
                    };

                    if(!values.content){
                        errors.content = 'Please write a content for your news.'
                    };

                    if(values.image === null){
                        errors.image = 'Please upload an image for your news.'
                    } else if(!supportedFormats.includes(values.image.type)){
                        errors.image = 'Images must be in .jpg, .jpeg or .png format.'
                    } else if(values.image.size > 1000000){
                        errors.image = 'Image size must be smaller than 1mb.'
                    };

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
                    
                    IsEdit(values);

                    return (
                        <Form className="form-container">
                            <div>
                                <label htmlFor='title'>Title</label>
                                <Field
                                    className="input-field"
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder={"Add a title"}
                                />
                                <ErrorMessage name="title" component={() => (
                                    <div className="error">{errors.title}</div>
                                )} />
                            </div>
                            <div>
                                <label htmlFor='content'>Content</label>
                                <Field
                                    id="content"
                                    name="content"
                                >
                                    {() => {
                                        return (
                                            <>
                                                <CKEditor
                                                    editor={ ClassicEditor }
                                                    config={{placeholder: "Write a content for your news"}} 
                                                    data={values.content}
                                                    onChange={(e, editor) => {
                                                        values.content= editor.getData();
                                                    }}
                                                />
                                            </>
                                        );
                                    }}
                                </Field>
                                <ErrorMessage name="content" component={() => (
                                    <div className="error">{errors.content}</div>
                                )} />
                            </div>
                            <div>
                                <label htmlFor='category'>Category</label>
                                <Field
                                    className="select-field"
                                    id="category"
                                    name="category"
                                    as="select"
                                >
                                    <option value="" disabled>Select category</option>
                                    {categoriesMock.length > 0 &&
                                        categoriesMock.map((category) => {
                                            return(
                                                <option value={category.id} key={category.id}>{category.name}</option>
                                            );
                                        })
                                    };
                                </Field>
                                <ErrorMessage name="category" component={() => (
                                    <div className="error">{errors.category}</div>
                                )} />
                            </div>
                            <div>
                                <label htmlFor='image'>Image</label>
                                <input
                                    ref={fileRef}
                                    hidden
                                    className="select-field"
                                    type="file"
                                    onChange={(e) => {
                                        setFieldValue("image", e.target.files[0]);
                                    }}
                                />
                                {values.image && <Previewimage image={values.image}/>}
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
};
 
export default NewsForm;