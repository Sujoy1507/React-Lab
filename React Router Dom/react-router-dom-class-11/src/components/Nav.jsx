import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="bg-emerald-900 px-6 py-2 text-white flex justify-between">
            <p className="text-2xl font-extrabold ">NavBar</p>
            <input
                type="text"
                placeholder="Searce Here..."
                className="border-2 outline-none rounded-lg px-3"
            />
            <div className="flex gap-6 text-xl">
                <Link to="/"> Home</Link>
                <Link to="/about"> About</Link>
                <Link to="/product"> Product</Link>
                <Link to="/product/women"> Women</Link>
                <Link to="/product/men"> Men</Link>
                <Link to='/course' >Course</Link>
            </div>
        </div>
    );
};

export default Nav;
