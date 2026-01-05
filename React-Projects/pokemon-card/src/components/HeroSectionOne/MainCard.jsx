import React from "react";
import CardIMG from "./CardIMG";

const MainCard = (props) => {
    const val = props.allPokemon;
    return (
        <div className="w-[360px] h-60 rounded-xl bg-slate-900  ">
            <CardIMG img={val.sprites.front_default} />
        </div>
    );
};

export default MainCard;
