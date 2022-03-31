import Card from "./Card";
import "../Card/card.scss";

const CardWrapper = ({cardsList}) => {
    const defaultImg = "/images/placeholder/empty-image.png";

    const cards = cardsList.map((item) => {
        return <Card 
                    title={item.title} 
                    img={item.img || defaultImg} 
                    description={item.description}
                />
    });

    return (
        <div className="wrapper-container"> 
           {cards} 
        </div>
        );
};

export default CardWrapper;