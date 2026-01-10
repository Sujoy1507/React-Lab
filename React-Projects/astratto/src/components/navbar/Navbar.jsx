import React from "react";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

const Navbar = () => {
    return (
        <div className=" w-full justify-between py-2 flex items-center font-bold px-2  border-b-gray-400 border-b  ">
            <NavLeft />
            <div className=" flex  gap-3 font-extrabold text-2xl items-center ">
                <i className="ri-shining-fill text-white bg-purple-600 rounded-full w-7 h-7 flex items-center justify-center gap-3  "></i>
                <p>Astratto</p>
            </div>
            <NavRight />
        </div>
    );
};

export default Navbar;
