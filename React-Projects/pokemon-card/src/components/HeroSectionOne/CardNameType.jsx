import React from "react";

const CardNameType = (props) => {
    const val = props.val;

    const type1 = val.types[1]?.type.name;
    const type2 = val.types[0].type.name;

    return (
        <div className="flex flex-col items-start w-full text-start gap-3">
            <h2 className="text-3xl font-extrabold uppercase ">{val.name}</h2>
            <div className="flex gap-3 items-center bg-slate-700 w-fit px-3  capitalize rounded m-auto font-extrabold">
                <h3 className="text-xl uppercase">Type:</h3>
                <h4 className="text-xl">{type1?`${type2}, ${type1}`:type2}</h4>
            </div>
        </div>
    );
};

export default CardNameType;
