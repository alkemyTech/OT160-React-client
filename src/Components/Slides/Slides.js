import {Fragment} from "react";
import { Link } from "react-router-dom";
import styles from "./slides.module.scss";

const MOCK_SLIDES = [
    {
        name: "name 1",
		order: "1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet facilisis nisl quis volutpat. Quisque tempor mattis tellus, eu hendrerit diam sollicitudin sed. Morbi dapibus, diam a tempor mollis, est metus lobortis neque, in venenatis ligula lorem sed risus. Vivamus fermentum magna ut nulla pretium pulvinar a sit amet libero",
		image: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
    },
    {
        name: "name 2",
		order: "2",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet facilisis nisl quis volutpat. Quisque tempor mattis tellus, eu hendrerit diam sollicitudin sed. Morbi dapibus, diam a tempor mollis, est metus lobortis neque, in venenatis ligula lorem sed risus. Vivamus fermentum magna ut nulla pretium pulvinar a sit amet libero",
		image: "https://www.gettyimages.es/gi-resources/images/500px/983703508.jpg"
    },
    {
        name: "name 3",
		order: "3",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet facilisis nisl quis volutpat. Quisque tempor mattis tellus, eu hendrerit diam sollicitudin sed. Morbi dapibus, diam a tempor mollis, est metus lobortis neque, in venenatis ligula lorem sed risus. Vivamus fermentum magna ut nulla pretium pulvinar a sit amet libero",
		image: "https://images.ctfassets.net/hrltx12pl8hq/qGOnNvgfJIe2MytFdIcTQ/429dd7e2cb176f93bf9b21a8f89edc77/Images.jpg"
    },
    {
        name: "name 1",
		order: "1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet facilisis nisl quis volutpat. Quisque tempor mattis tellus, eu hendrerit diam sollicitudin sed. Morbi dapibus, diam a tempor mollis, est metus lobortis neque, in venenatis ligula lorem sed risus. Vivamus fermentum magna ut nulla pretium pulvinar a sit amet libero",
		image: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
    },
    {
        name: "name 2",
		order: "2",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet facilisis nisl quis volutpat. Quisque tempor mattis tellus, eu hendrerit diam sollicitudin sed. Morbi dapibus, diam a tempor mollis, est metus lobortis neque, in venenatis ligula lorem sed risus. Vivamus fermentum magna ut nulla pretium pulvinar a sit amet libero",
		image: "https://www.gettyimages.es/gi-resources/images/500px/983703508.jpg"
    },
    {
        name: "name 3",
		order: "3",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet facilisis nisl quis volutpat. Quisque tempor mattis tellus, eu hendrerit diam sollicitudin sed. Morbi dapibus, diam a tempor mollis, est metus lobortis neque, in venenatis ligula lorem sed risus. Vivamus fermentum magna ut nulla pretium pulvinar a sit amet libero",
		image: "https://images.ctfassets.net/hrltx12pl8hq/qGOnNvgfJIe2MytFdIcTQ/429dd7e2cb176f93bf9b21a8f89edc77/Images.jpg"
    }
]
const Slides = () => {

    const slides = MOCK_SLIDES.map((slide) => {
        return (
                <div className={styles.slide}>
                    <div className={styles.slide__image}>
                        <img src={slide.image} alt="slide img"/>
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
        )
    });   
    
    return (
        <Fragment>
            <div className={styles.create_slide_link}>
                <Link to="/backoffice/Slides/create">Crear Slide</Link>
            </div>
            <div className={styles.slide__wrapper}>
                {slides}
            </div>
        </Fragment>
        );
}

export default Slides;