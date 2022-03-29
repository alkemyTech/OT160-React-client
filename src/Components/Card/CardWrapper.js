import Card from "./Card";
import "../Card/card.scss";


const CardWrapper = ({cardsObject}) => {
    const cards = cardsObject.map((item) => {
        return <Card title={item.title} img={item.img === "" ? "/images/placeholder/empty-image.png" : item.img} description={item.description}/>
    });

    return (
        <div className="wrapper-container"> 
           {cards} 
        </div>
        );
};

export default CardWrapper;