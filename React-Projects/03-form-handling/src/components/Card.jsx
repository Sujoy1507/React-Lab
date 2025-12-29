import React from "react";

const Card = (props) => {
    return (
        <div className=" p-2 w-full h-[400px] shrink-0 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/4    ">
            <div className="bg-sky-200 w-full h-full flex flex-col gap-4 p-4  rounded-xl">
                <img
                    src={props.photo}
                    alt=""
                    className="w-[100px] h-[100px] rounded-full object-cover object-top   "
                />
                <h1 className="bg-white text-3xl font-bold text-violet-950 rounded-xl px-4 py-1 ">{props.name}</h1>
                <div className=" flex justify-between">
                    <h2 className="bg-white rounded-xl px-4 py-1   ">
                        {props.mobile}
                    </h2>
                    <h2 className="bg-white rounded px-4 py-1 ">{props.age}</h2>
                </div>
                <p className="bg-white rounded-xl px-4 py-1 text-gray-800 text-sm">{props.bio}</p>
                <button 
                onClick={()=>{
                    props.deleteHandler(props.index)
                }}
                 className="bg-orange-700 text-white text-xl font-bold rounded py-1 px-4">Remove</button>
            </div>
        </div>
    );
};

export default Card;
