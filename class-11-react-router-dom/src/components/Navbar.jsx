import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="px-9 py-3 bg-emerald-800 text-white flex justify-between">
            <h1>NavBar</h1>
            <input type="text" placeholder="Enter Anything" className="border-2" />
            <div className="flex gap-7">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/landing'>Landing</Link>
                <Link to='/course'>Course</Link>
                <Link to='/product'>Product`</Link>
            </div>
        </div>
    );
};

export default Navbar;
