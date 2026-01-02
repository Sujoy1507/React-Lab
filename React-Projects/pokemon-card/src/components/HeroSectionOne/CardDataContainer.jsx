import React from "react";
import CardNameType from "./CardNameType";
import CardAbilities from "./CardAbilities";
import CardMoves from "./CardMoves";

const CardDataContainer = (props) => {
    const val = props.val;
    return (
        <div className="flex p-4 justify-center w-full items-start flex-col gap-4 ">
            <CardNameType val={val} />
            <CardAbilities val={val} />
            <CardMoves val={val} />
        </div>
    );
};

export default CardDataContainer;
