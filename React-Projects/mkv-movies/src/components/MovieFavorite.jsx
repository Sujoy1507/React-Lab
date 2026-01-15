import React from "react";

const MovieFavorite = ({ popularity }) => {
    return (
        <div className="bg-slate-900/30 rounded-xl backdrop-blur-2xl p-4 flex flex-col gap-4">
            <button className="w-full py-2 rounded-lg bg-pink-600 text-white font-bold hover:bg-pink-700 transition">
                Watch Trailer
            </button>

            <button className="w-full py-2 rounded-lg bg-slate-800 text-white font-semibold hover:bg-slate-700 transition">
                Add to Favorites
            </button>

            <div className="flex justify-between text-slate-300 text-sm">
                <span>Popularity</span>
                <span className="font-semibold">{popularity}</span>
            </div>
        </div>
    );
};

export default MovieFavorite;
