import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
    return (
        <div className="w-40 h-fit  rounded px-5 py-2 bg-linear-to-tl from-emerald-600 to-slate-600 flex flex-col gap-4 text-white font-bold ">
            <Link
                className="bg-linear-to-br from-slate-600 to-zinc-500 rounded py-[2px] active:scale-95 active:from-slate-500 to-zinc-600 rounded px-4 "
                to="/"
            >
                Home
            </Link>
            <Link
                className="bg-linear-to-br from-slate-600 to-zinc-500 rounded py-[2px] active:scale-95 active:from-slate-500 to-zinc-600 rounded px-4 "
                to="/about"
            >
                About
            </Link>
            <Link
                className="bg-linear-to-br from-slate-600 to-zinc-500 rounded py-[2px] active:scale-95 active:from-slate-500 to-zinc-600 rounded px-4 "
                to="/landing"
            >
                Landing
            </Link>
            <Link
                className="bg-linear-to-br from-slate-600 to-zinc-500 rounded py-[2px] active:scale-95 active:from-slate-500 to-zinc-600 rounded px-4 "
                to="/course"
            >
                Course
            </Link>
            <Link
                className="bg-linear-to-br from-slate-600 to-zinc-500 rounded py-[2px] active:scale-95 active:from-slate-500 to-zinc-600 rounded px-4 "
                to="/product"
            >
                Product
            </Link>
        </div>
    );
};

export default NavMenu;
