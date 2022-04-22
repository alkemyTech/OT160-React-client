import React, { useEffect, useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {getCategories} from "../../Services/categoriesService";
import { titleValidation, nameValidation, fileValidationExtensions } from "../../Services/formValidationsService";
import '../../Components/FormStyles.css';
import PreviewImage from './PreviewImage';

const NewsForm = (id) => {
    const [sentForm, changeSentForm] = useState(false);
    const [editNews, setEditNews] = useState(false);
    const [categories, setCategories] = useState([]);

/*     getCategories()
    .then((res) => {console.log(res)})
    .catch(err => console.log(err)) */


    const newsEditMock = {
        title: 'Title example',
        content: '<p>Content <strong>example</strong></p>',
        category: '2',
    };

    const fileRef = useRef(null);

    const categoriesMock = [
        {id: 1, name: 'Demo option 1'},
        {id: 2, name: 'Demo option 2'},
        {id: 3, name: 'Demo option 3'},
    ];

    useEffect(() => {
        async function fetchCategories() {
            const response = categoriesMock
            setCategories(response)
        }
        fetchCategories();
    }, []);

    return (
        <>
            <Formik
                initialValues={{
                    title: '',
                    content: '',
                    category: '',
                    image: ""
                }}
                validate={(values) => {
                    const errors = {};
                    titleValidation(values.title, errors);
                    nameValidation(values.category, errors);
                    nameValidation(values.content, errors);
                    values.image.name && fileValidationExtensions(values.image.name, errors);
                    return errors;
                }}
                onSubmit={(values, { resetForm }) => {
                    changeSentForm(true);
                    setTimeout(() => changeSentForm(false), 5000);
                    resetForm();
                }}
            >
                {({ values, errors, setFieldValue, }) => {
                    if (editNews) {
                        values.title = newsEditMock.title;
                        values.content = newsEditMock.content;
                        values.category = newsEditMock.category;
                        setEditNews(false);
                    };
                    return (
                        <Form className="form-container">
                            <div className='form-group'>
                                <label htmlFor='title'>Título</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder={"Añade un título"}
                                />
                                <ErrorMessage name="title" component={() => (
                                    <div className="error">{errors.title}</div>
                                )} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='content'>Contenido</label>
                                <Field
                                    id="content"
                                    name="content"
                                    className="form-control"
                                >
                                    {() => {
                                        return (
                                            <>
                                                <CKEditor
                                                    editor={ ClassicEditor }
                                                    config={{placeholder: "Escribe un contenido para tu noticia"}} 
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
                            <div className='form-group'>
                                <label htmlFor='category'>Categoría</label>
                                <Field
                                    className="form-control"
                                    id="category"
                                    name="category"
                                    as="select"
                                >
                                    <option value="" disabled>Selecciona una categoría</option>
                                    {categories.length > 0 &&
                                        categories.map((category) => {
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
                            <div className='form-group'>
                                <label htmlFor='image'>Imagen</label>
                                <input
                                    ref={fileRef}
                                    hidden
                                    className="form-control-file"
                                    type="file"
                                    onChange={(e) => {
                                        setFieldValue("image", e.target.files[0]);
                                    }}
                                />
                                {errors.image && <PreviewImage image={values.image}/>}
                                <button
                                    type="button"
                                    className='btn btn-outline-danger'
                                    onClick={() => {
                                        fileRef.current.click();
                                    }}
                                >
                                    Subir imagen
                                </button>
                                <ErrorMessage name="image" component={() => (
                                    <div className="error">{errors.image}</div>
                                )} />
                            </div>
                            <button className="btn btn-danger" type="submit">Enviar</button>
                            {sentForm && <p className='success'>Formulario enviado con éxito.</p>}
                        </Form>
                    )
                }}
            </Formik>
        </>
    );
};
 
export default NewsForm;