import React from "react";

const MovieInfo = ({ releaseDate, language, rating, votes }) => {
    return (
        <div className="bg-slate-900/30 rounded-xl backdrop-blur-2xl w-full p-4 grid grid-cols-2 gap-4 text-slate-200">
            <div className="flex flex-col">
                <span className="text-sm text-slate-400">
                    Release
                </span>
                <span className="text-lg font-semibold text-white">
                    {releaseDate}
                </span>
            </div>

            <div className="flex flex-col">
                <span className="text-sm text-slate-400">
                    Language
                </span>
                <span className="text-lg font-semibold text-white uppercase">
                    {language}
                </span>
            </div>

            <div className="flex flex-col">
                <span className="text-sm text-slate-400">
                    Rating
                </span>
                <span className="text-lg font-semibold text-white">
                    {rating}
                </span>
            </div>

            <div className="flex flex-col">
                <span className="text-sm text-slate-400">
                    Votes
                </span>
                <span className="text-lg font-semibold text-white">
                    {votes}
                </span>
            </div>
        </div>
    );
};

export default MovieInfo;
