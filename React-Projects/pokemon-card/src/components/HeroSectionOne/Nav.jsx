import React, { useState } from "react";
import logo from "../../assets/Pokemon-Logo.webp";
import { SquareChevronDown } from "lucide-react";

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full h-fit bg-slate-700">
            <div className="max-w-[1400px] px-10  w-full m-auto   relative text-2xl items-center flex justify-between  text-white h-10 md:h-16 xl:h-20">
                <h4 className="bg-slate-800 px-6 py-1 rounded active:scale-95 hover:bg-slate-950">
                    Home
                </h4>

                <div className=" hidden md:block md:text-lg xl:text-3xl  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-extrabold -tracking-tight  ">
                    <img className="w-36" src={logo} alt="" />
                </div>

                <ul className=" hidden  xl:flex gap-9 justify-between">
                    <li className="bg-slate-800 px-6 py-1 rounded active:scale-95 hover:bg-slate-950">
                        Pokédex
                    </li>
                    <li className="bg-slate-800 px-6 py-1 rounded active:scale-95 hover:bg-slate-950">
                        Types
                    </li>
                    <li className="bg-slate-800 px-6 py-1 rounded active:scale-95 hover:bg-slate-950">
                        Favorites
                    </li>
                </ul>
                <div
                    onClick={() => setOpen(!open)}
                    className="bg-slate-800 px-2 md:px-6 py-1 rounded active:scale-95 hover:bg-slate-950 flex items-center justify-center gap-3 xl:hidden"
                >
                    <p className="hidden sm:block">Menu</p>
                    <SquareChevronDown size={30} />
                </div>

                <div
                    className={`absolute xl:hidden w-48 bg-slate-600 right-0 rounded-b-2xl p-3 transition-all duration-300 ease-out 
                        ${
                            open
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10 pointer-events-none"
                        }`}
                >
                    <ul className=" flex flex-col gap-9 justify-between">
                        <li className="bg-slate-800 px-6 py-1 rounded active:scale-95 hover:bg-slate-950">
                            Pokédex
                        </li>
                        <li className="bg-slate-800 px-6 py-1 rounded active:scale-95 hover:bg-slate-950">
                            Types
                        </li>
                        <li className="bg-slate-800 px-6 py-1 rounded active:scale-95 hover:bg-slate-950">
                            Favorites
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;
