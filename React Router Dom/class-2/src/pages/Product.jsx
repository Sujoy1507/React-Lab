import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
    return (
        <div>
            <div className="flex flex-col gap-5 mt-8">
                <div className="flex w-full bg-sky-500 p-1 justify-between">
                    <Link to="/product/soap">Soap</Link>
                    <Link to="/product/shampoo">Shampoo</Link>
                    <Link to="/product/bodyspray">Body Spray</Link>
                </div>

                <div className="flex bg-purple-500 gap-4 w-full p-1 justify-between flex-wrap">
                    <p className="text-xl text-white whitespace-nowrap ">
                        Sale is Live
                    </p>
                    <p className="text-xl text-white whitespace-nowrap ">
                        Sale is Live
                    </p>
                    <p className="text-xl text-white whitespace-nowrap ">
                        Sale is Live
                    </p>
                    <p className="text-xl text-white whitespace-nowrap ">
                        Sale is Live
                    </p>
                    <p className="text-xl text-white whitespace-nowrap ">
                        Sale is Live
                    </p>
                    <p className="text-xl text-white whitespace-nowrap ">
                        Sale is Live
                    </p>
                    <p className="text-xl text-white whitespace-nowrap ">
                        Sale is Live
                    </p>
                    <p className="text-xl text-white whitespace-nowrap ">
                        Sale is Live
                    </p>
                    <p className="text-xl text-white whitespace-nowrap ">
                        Sale is Live
                    </p>
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default Product;
