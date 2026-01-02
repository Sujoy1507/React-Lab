import React, { useState } from "react";
import logo from "../../assets/Pokemon-Logo.webp";
import { SquareChevronDown } from "lucide-react";

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full h-fit bg-slate-700  ">
            <div className="w-full h-fit bg-slate-700 relative max-w-[1400px] m-auto ">
                <div className="max-w-[1400px] px-10  w-full m-auto   relative text-2xl items-center flex justify-between  text-white h-15">
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
                        <SquareChevronDown
                            className={`transition-transform duration-300 ${
                                open ? "rotate-180" : ""
                            }`}
                            size={30}
                        />
                    </div>
                </div>
                <div
                    className={`absolute right-5 top-full mt-2 z-50 xl:hidden text-white
                                transition-all duration-300 ease-in-out
                                    ${
                                        open
                                            ? "opacity-100 scale-100"
                                            : "opacity-0 scale-95 pointer-events-none"
                                    }`}
                >
                    <ul className="flex flex-col gap-4 bg-slate-700 p-4 rounded">
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
