import React from "react";
import Card from "./Card";

const MainCard = (props) => {
    return (
        <div className="grid grid-cols-1  md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 gap-4 justify-center ">
            {props.val.map((val, index) => {
                const img = val.sprites.front_default;
                const name = val.name;
                const allTypes = val.types.map((type) => type.type.name);
                // console.log(allTypes)
                // const realType = allTypes[1] ? allTypes[1] : allTypes[0];
                // console.log(realType);

                return (
                    <Card key={index} img={img} name={name} type={allTypes} />
                );
            })}
        </div>
    );
};

export default MainCard;
