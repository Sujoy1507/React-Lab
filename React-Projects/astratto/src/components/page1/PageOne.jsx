import React from "react";
import Page1Left from "./Page1Left";
import Page1Right from "./Page1Right";
import Page1Center from "./Page1Center";

const PageOne = () => {
    return (
        <div className="relative w-full h-[calc(100vh-80px)]">
            <div className=" flex justify-between w-full">
                <Page1Left />
                <Page1Right />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-1/2 ">
                <Page1Center />
            </div>
        </div>
    );
};

export default PageOne;
