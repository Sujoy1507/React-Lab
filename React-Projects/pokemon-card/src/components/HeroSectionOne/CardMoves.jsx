import React from "react";

const CardMoves = (props) => {
    // console.log(props.val.moves);
    const moves = props.val.moves.map((moves) => moves.move.name);
    console.log("moves,", moves);
    return (
        <div className="flex gap-4 w-full rounded-sm bg-slate-600 p-2 ">
            <h3 className="font-bold text-lg uppercase">Moves:</h3>
            <div className="scroll font-bold w-full max-w-[220px] p-1 rounded h-[100px] flex-wrap flex gap-y-2  text-slate-950 capitalize overflow-y-scroll bg-slate-200">
                {moves.map((val, index) => {
                    return <h4
                        key={index}
                        className="scroll w-full bg-slate-300 p-1 rounded border-2 border-slate-200 overflow-x-scroll "
                    >
                        {val}
                    </h4>;
                })}
            </div>
        </div>
    );
};

export default CardMoves;
