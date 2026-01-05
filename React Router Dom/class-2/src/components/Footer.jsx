import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="flex bg-slate-700 absolute bottom-0 w-full justify-evenly p-1 items-center ">
            <p className=" text-2xl text-cyan-500 ">This is footer</p>
            <button onClick={()=>{
                navigate('/product')
            }} className="rounded  active:scale-95 text-white px-7 bg-fuchsia-700 text-2xl p-1 border-none">
                Explore Course
            </button>
        </div>
    );
};

export default Footer;
