import React from "react";
import "../Card/card.scss";

const Card = ({title, img, description}) => {
    return ( 
        <div className="card-box">
            <div className="image-container">
                <img src={img} alt="description"/>
            </div>
            <h3>{title}</h3>
            <hr></hr>
            <p>{description}</p>
        </div>
    )
};

const CardWrapper = () => {
    const testCards = [
        {   title: "Título 1", 
            img: "https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum augue metus, vel consequat nunc tincidunt et. Proin tellus sapien, pharetra facilisis lorem sit amet, maximus pulvinar erat. Suspendisse potenti. Sed nec ex neque. Nunc sit amet nisi a erat iaculis accumsan. Phasellus dapibus ante eu diam lacinia, quis fermentum neque venenatis. Donec eu tempus urna, vitae finibus erat. Donec faucibus risus at purus mattis sollicitudin. Mauris et sagittis eros. Aliquam erat volutpat. Donec dapibus felis a metus tempus sodales. Curabitur ut est lorem. Etiam iaculis orci aliquet velit viverra, vitae faucibus augue tincidunt. Ut augue ante, fringilla eu malesuada nec, volutpat vitae nisi."
        },
        {
            title: "Título 2", 
            img: "", 
            description:"Esta tarjeta es un ejemplo de no tener una imagen definida"
        },
        {
            title: "Título 3", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6CgDCeuGC-OO_PXbYdnGaGqFybzgJuxpuu6DZCZBrNqDqw3FUP_f8-gntxDsVXW78Zg&usqp=CAU", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum augue metus, vel consequat nunc tincidunt et. Proin tellus sapien, pharetra facilisis lorem sit amet, maximus pulvinar erat. Suspendisse potenti. Sed nec ex neque. Nunc sit amet nisi a erat iaculis accumsan. Phasellus dapibus ante eu diam lacinia, quis fermentum neque venenatis. Donec eu tempus urna, vitae finibus erat. Donec faucibus risus at purus mattis sollicitudin. Mauris et sagittis eros. Aliquam erat volutpat. Donec dapibus felis a metus tempus sodales. Curabitur ut est lorem. Etiam iaculis orci aliquet velit viverra, vitae faucibus augue tincidunt. Ut augue ante, fringilla eu malesuada nec, volutpat vitae nisi."
        },
        {
            title: "Título 4", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9e9dVMS4LPMTezD1JMjFkUtUrxGo8ZlI2U_J9-EUdY-xEdjkt_2Vf9Qtyq1pbqwrCwak&usqp=CAU", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum augue metus, vel consequat nunc tincidunt et. Proin tellus sapien, pharetra facilisis lorem sit amet, maximus pulvinar erat. Suspendisse potenti. Sed nec ex neque. Nunc sit amet nisi a erat iaculis accumsan. Phasellus dapibus ante eu diam lacinia, quis fermentum neque venenatis. Donec eu tempus urna, vitae finibus erat. Donec faucibus risus at purus mattis sollicitudin. Mauris et sagittis eros. Aliquam erat volutpat. Donec dapibus felis a metus tempus sodales. Curabitur ut est lorem. Etiam iaculis orci aliquet velit viverra, vitae faucibus augue tincidunt. Ut augue ante, fringilla eu malesuada nec, volutpat vitae nisi."
        },
        {   title: "Título 5", 
            img: "https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum augue metus, vel consequat nunc tincidunt et. Proin tellus sapien, pharetra facilisis lorem sit amet, maximus pulvinar erat. Suspendisse potenti. Sed nec ex neque. Nunc sit amet nisi a erat iaculis accumsan. Phasellus dapibus ante eu diam lacinia, quis fermentum neque venenatis. Donec eu tempus urna, vitae finibus erat. Donec faucibus risus at purus mattis sollicitudin. Mauris et sagittis eros. Aliquam erat volutpat. Donec dapibus felis a metus tempus sodales. Curabitur ut est lorem. Etiam iaculis orci aliquet velit viverra, vitae faucibus augue tincidunt. Ut augue ante, fringilla eu malesuada nec, volutpat vitae nisi."
        },
        {
            title: "Título 6", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmPVulUDNkmk6G0irYxKWZiPnwRXXuM8_T_2fFrLHnRNmjC5LPG1l94olPbrYJjikH4s&usqp=CAU", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum augue metus, vel consequat nunc tincidunt et. Proin tellus sapien, pharetra facilisis lorem sit amet, maximus pulvinar erat. Suspendisse potenti. Sed nec ex neque. Nunc sit amet nisi a erat iaculis accumsan. Phasellus dapibus ante eu diam lacinia, quis fermentum neque venenatis. Donec eu tempus urna, vitae finibus erat. Donec faucibus risus at purus mattis sollicitudin. Mauris et sagittis eros. Aliquam erat volutpat. Donec dapibus felis a metus tempus sodales. Curabitur ut est lorem. Etiam iaculis orci aliquet velit viverra, vitae faucibus augue tincidunt. Ut augue ante, fringilla eu malesuada nec, volutpat vitae nisi."
        },
        {
            title: "Título 7", 
            img: "", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum augue metus, vel consequat nunc tincidunt et. Proin tellus sapien, pharetra facilisis lorem sit amet, maximus pulvinar erat. Suspendisse potenti. Sed nec ex neque. Nunc sit amet nisi a erat iaculis accumsan. Phasellus dapibus ante eu diam lacinia, quis fermentum neque venenatis. Donec eu tempus urna, vitae finibus erat. Donec faucibus risus at purus mattis sollicitudin. Mauris et sagittis eros. Aliquam erat volutpat. Donec dapibus felis a metus tempus sodales. Curabitur ut est lorem. Etiam iaculis orci aliquet velit viverra, vitae faucibus augue tincidunt. Ut augue ante, fringilla eu malesuada nec, volutpat vitae nisi."
        },
        {
            title: "Título 8", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9e9dVMS4LPMTezD1JMjFkUtUrxGo8ZlI2U_J9-EUdY-xEdjkt_2Vf9Qtyq1pbqwrCwak&usqp=CAU", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum augue metus, vel consequat nunc tincidunt et. Proin tellus sapien, pharetra facilisis lorem sit amet, maximus pulvinar erat. Suspendisse potenti. Sed nec ex neque. Nunc sit amet nisi a erat iaculis accumsan. Phasellus dapibus ante eu diam lacinia, quis fermentum neque venenatis. Donec eu tempus urna, vitae finibus erat. Donec faucibus risus at purus mattis sollicitudin. Mauris et sagittis eros. Aliquam erat volutpat. Donec dapibus felis a metus tempus sodales. Curabitur ut est lorem. Etiam iaculis orci aliquet velit viverra, vitae faucibus augue tincidunt. Ut augue ante, fringilla eu malesuada nec, volutpat vitae nisi."
        }
    ];

    const cards = testCards.map((item) => {
        return <Card title={item.title} img={item.img === "" ? "/images/placeholder/empty-image.png" : item.img} description={item.description}/>
    });

    return (
        <div className="wrapper-container"> 
           {cards} 
        </div>
        );
};

export default CardWrapper;