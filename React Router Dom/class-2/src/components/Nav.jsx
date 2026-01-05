import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="bg-emerald-900 w-full h-fit px-9 py-2 justify-between flex text-2xl text-white font-bold ">
            <h3 className="text-3xl font-extrabold">Navbar</h3>
            <div className="flex gap-9">
                <NavLink
                    style={({ isActive }) => ({
                        color: isActive ? "red" : "white",
                    })}
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    style={({ isActive }) => ({
                        color: isActive ? "red" : "white",
                    })}
                    to="/about"
                >
                    About
                </NavLink>
                <NavLink
                    style={({ isActive }) => ({
                        color: isActive ? "red" : "white",
                    })}
                    to="/product"
                >
                    Product
                </NavLink>
            </div>
        </div>
    );
};

export default Nav;
