import React from "react";
import MainCard from "./MainCard";

const Home = (props) => {
    return (
        <div className="bg-slate-800 max-w-[1700px] m-auto h-fit py-10 px-3   ">
            <MainCard val={props.val} />
        </div>
    );
};

export default Home;
