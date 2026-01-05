// import React from "react";
// import CardIMG from "./CardIMG";
// import CardDataContainer from "./CardDataContainer";
// import NextPage from "./NextPage";

// const CardContainer = (props) => {
//     const val = props.allPokemon;
//     return (
//         <div className="bg-slate-700">
//             <div className="scroll bg-slate-800  py-16 sm:py-9  p-1 flex overflow-x-scroll w-full  justify-start items-start max-w-[1600px] m-auto">
//                 {props.allPokemon.map((val, index) => {
//                     // console.log(val)
//                     return (
//                         <div
//                             key={index}
//                             className=" bg-linear-to-t from-slate-800 to-emerald-400 shrink-0  sm:w-full md:w-1/2 xl:w-1/3 2xl:w-1/4  p-2 rounded-2xl border-8 border-slate-800 text-white "
//                         >
//                             <CardIMG img={val.sprites.front_default} />
//                             <CardDataContainer val={val} />
//                         </div>
//                     );
//                 })}
//             </div>
//             <NextPage />
//         </div>
//     );
// };

// export default CardContainer;

import React from "react";
import MainCard from "./MainCard";

const CardContainer = (props) => {
    return (
        <div className=" bg-green-500  ">
            <div className="max-w-[1500px] h-screen bg-red-400 m-auto  ">
                <MainCard val={props.allPokemon} />
            </div>
        </div>
    );
};

export default CardContainer;
