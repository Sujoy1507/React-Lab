import React from "react";

const CardIMG = (props) => {
    return (
        <img
            className="w-[150px] h-[150px] mx-auto object-contain object-top border-2 p-2 rounded-xl "
            src={props.img}
            alt=""
        />
    );
};

export default CardIMG;
