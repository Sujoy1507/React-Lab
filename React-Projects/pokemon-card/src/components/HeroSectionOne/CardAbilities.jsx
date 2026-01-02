import React from "react";

const CardAbilities = (props) => {
    // console.log(props.val.abilities);

    const pokeAbilities = props.val.abilities.map((a) => a.ability.name);
    return (
        <div className="flex gap-4 w-full rounded-sm bg-slate-600 p-2 ">
            <h3 className="font-bold text-lg uppercase">Abilities:</h3>
            <div className="scroll font-bold w-full max-w-[220px] p-1 rounded h-fit flex-wrap flex-col flex gap-y-2  text-slate-950 capitalize overflow-y-scroll bg-slate-200">
                {pokeAbilities.map((val, index) => {
                    return (
                        <h4
                            key={index}
                            className="scroll  bg-slate-300 p-1 rounded border-2 border-slate-200 overflow-x-scroll "
                        >
                            {val}
                        </h4>
                    );
                })}
            </div>
        </div>
    );
};

export default CardAbilities;
