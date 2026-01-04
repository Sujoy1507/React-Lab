import React from "react";

const Name = (props) => {
    return (
        <div className="w-full m-auto capitalize flex flex-col gap-4">
            <h2 className="text-white m-auto w-fit font-extrabold text-3xl">
                {props.name}
            </h2>
            <div className="text-white font-extrabold text-2xl w-full justify-evenly flex ">
                {props.type.map((val,index)=>{
                    return <p key={index}>{val}</p>
                })}
            </div>
        </div>
    );
};

export default Name;
