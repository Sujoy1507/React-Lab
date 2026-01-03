import React, { useState } from "react";
import pokemonLogo from "../assets/pokemon-logo.webp";
import pokeBallLogo from "../assets/pokeball-logo.webp";
import { SquareMenu } from "lucide-react";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";

const Nav = () => {
    const [flag, setFlag] = useState(false);

    const navToogle = () => {
        setFlag((prev) => !prev);
    };

    return (
        <div className="max-w-[1700px] w-full m-auto relative ">
            <div className="bg-linear-to-b from-emerald-900 to-slate-950 flex gap-6  m-auto px-6 py-2 w-full max-w-[1700px] items-center justify-between text-white ">
                <img
                    className="w-[150px] object-cover  hidden md:block   "
                    src={pokemonLogo}
                    alt="Pokemon Logo"
                />
                <img
                    className="w-[50px] object-cover md:hidden "
                    src={pokeBallLogo}
                    alt="PokeBall Logo"
                />

                <input
                    className="h-8 border-2 w-[120px] sm:w-[200px] md:w-[300px]   px-5 rounded outline-none "
                    type="text"
                    placeholder="Search..."
                />

                <div className=" h-fit hidden md:flex rounded px-5 py-2   gap-4 text-white font-bold ">
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

                <div
                    onClick={() => {
                        navToogle();
                    }}
                    className=" cursor-pointer md:hidden  flex gap-2 border-2 px-2 py-[2px] rounded  "
                >
                    <p className="hidden sm:block pointer-events-none ">Menu</p>
                    <SquareMenu />
                </div>
            </div>
            <div className="absolute right-0 top-full md:hidden z-50">
                {flag && <NavMenu />}
            </div>
        </div>
    );
};

export default Nav;
