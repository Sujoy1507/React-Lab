import React from "react";

const MovieOverview = ({ title, overview }) => {
    return (
        <div className="bg-slate-900/30 rounded-xl backdrop-blur-2xl w-full h-fit p-2 flex gap-4 flex-col font-bold">
            <h2 className="text-3xl font-bold text-white">{title}</h2>

            <p className="text-slate-200 leading-relaxed text-base">
                {overview}
            </p>
        </div>
    );
};

export default MovieOverview;
