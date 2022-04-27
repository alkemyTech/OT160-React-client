import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './slides.module.scss';
import { getSlides } from '../../Services/slidesService';

const Slides = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    getAllSlides();
  }, []);

  async function getAllSlides() {
    const { data } = await getSlides();
    setSlides(data);
    console.log(data);
  }

  const content = slides?.map((slide) => {
    return (
      <div className={styles.slide}>
        <div className={styles.slide__image}>
          <img src={slide.image} alt="slide img" />
        </div>
        <div className={styles.slide__title}>
          <h1>{slide.name}</h1>
        </div>
        <div className={styles.slide__order}>
          <p>Order number: {slide.order}</p>
        </div>
        <dvi className={styles.slide__actions}>
          <button className="btn btn-outline-danger">Eliminar</button>
          <button className="btn btn-outline-dark">Editar</button>
        </dvi>
      </div>
    );
  });

  return (
    <Fragment>
      <div className={styles.create_slide_link}>
        <Link to="/backoffice/Slides/create">Crear Slide</Link>
      </div>
      <div className={styles.slide__wrapper}>{content}</div>
    </Fragment>
  );
};

export default Slides;
