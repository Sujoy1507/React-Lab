import React from "react";
import CardIMG from "./CardIMG";
import CardDataContainer from "./CardDataContainer";

const CardContainer = (props) => {
    const val = props.allPokemon;
    return (
        <div className="bg-slate-700">
            <div className="scroll gap-4 bg-slate-800 w-full py-16 sm:py-9  p-1 flex overflow-x-scroll w-full  justify-start items-start max-w-[1400px] m-auto">
                {props.allPokemon.map((val, index) => {
                    // console.log(val)
                    return (
                        <div
                            key={index}
                            className="bg-slate-950 h-[603px] w-[349px] p-2 rounded-xl text-white "
                        >
                            <CardIMG img={val.sprites.front_default} />
                            <CardDataContainer val={val} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CardContainer;
