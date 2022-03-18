import React from "react";

const Previewimage = ({ image }) => {
    const [preview, setPreview] = React.useState(null);

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
        setPreview(reader.result);
    };
    return(
        <div>
            <img src={preview} alt="preview" width="200px"/>
        </div>
    );
};

export default Previewimage;