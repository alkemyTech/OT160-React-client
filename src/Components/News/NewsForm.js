import React, { useEffect, useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import '../../Components/FormStyles.css';
import PreviewImage from './PreviewImage';

const NewsForm = () => {
    const [sentForm, changeSentForm] = useState(false);
    const [editNews, setEditNews] = useState(false);
    const [categories, setCategories] = useState([]);

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
                    image: null
                }}
                validate={(values) => {
                    const errors = {};
                    const supportedFormats = ["image/jpg", "image/jpeg", "image,png"];

                    if(!values.title){
                        errors.title = 'Por favor escribe un título.'
                    } else if(values.title.length <= 3){
                        errors.title = 'El título debe contener más de 3 caracteres.'
                    };

                    if(!values.category){
                        errors.category = 'Por favor selecciona una categoría.'
                    };

                    if(!values.content){
                        errors.content = 'Por favor escribe un contenido.'
                    };

                    if(values.image === null){
                        errors.image = 'Por favor sube una imagen.'
                    } else if(!supportedFormats.includes(values.image.type)){
                        errors.image = 'Las imagenes deben ser en formato .jpg, .jpeg o .png .'
                    } else if(values.image.size > 1000000){
                        errors.image = 'El tamaño de la imagen no puede ser mayor a 1mb.'
                    };

                    return errors;
                }}
                onSubmit={(values, { resetForm }) => {
                    console.log('Form sent');
                    console.log(values);
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
                            <div className='label-container'>
                                <label htmlFor='title'>Título</label>
                                <Field
                                    className="input-field"
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder={"Añade un título"}
                                />
                                <ErrorMessage name="title" component={() => (
                                    <div className="error">{errors.title}</div>
                                )} />
                            </div>
                            <div className='label-container'>
                                <label htmlFor='content'>Contenido</label>
                                <Field
                                    id="content"
                                    name="content"
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
                            <div className='label-container'>
                                <label htmlFor='category'>Categoría</label>
                                <Field
                                    className="select-field"
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
                            <div className='label-container'>
                                <label htmlFor='image'>Imagen</label>
                                <input
                                    ref={fileRef}
                                    hidden
                                    className="select-field"
                                    type="file"
                                    onChange={(e) => {
                                        setFieldValue("image", e.target.files[0]);
                                    }}
                                />
                                {values.image && <PreviewImage image={values.image}/>}
                                <button
                                    type="button"
                                    className='secondary-btn'
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
                            <button className="submit-btn" type="submit">Enviar</button>
                            {sentForm && <p className='success'>Formulario enviado con éxito.</p>}
                        </Form>
                    )
                }}
            </Formik>
        </>
    );
};
 
export default NewsForm;