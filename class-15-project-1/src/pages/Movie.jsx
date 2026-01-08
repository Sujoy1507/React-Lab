import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MoviesDataContext } from "../context/MovieContext";

const Movie = () => {
    const imagePath = `https://image.tmdb.org/t/p/w500`;

    const { id } = useParams();
    const movieData = useContext(MoviesDataContext);
    const movie = movieData.find((movie) => movie.id === Number(id));
    console.log(movie);

    const movieGenres = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western",
    };

    return (
        <div
            className={` w-full h-[calc(100vh-70px)]   bg-cover bg-center bg-no-repeat `}
            style={{
                backgroundImage: `url(${imagePath + movie.backdrop_path})`,
            }}
        >
            <div className="w-full h-full backdrop-blur-2xl p-2 flex gap-4">
                {/* Image and title part left side */}
                <div className="w-2/3 h-full flex flex-col gap-2">
                    <img
                        className="w-full h-3/4 rounded-md object-cover"
                        src={imagePath + movie.backdrop_path}
                        alt={movie.title}
                    />
                    <div className="h-1/4 bg-white/35 rounded-xl px-20 py-2 ">
                        <h2
                            className={`h-full flex justify-center items-center scale-x-110 font-bold bg-cover bg-center text-transparent bg-clip-text ${
                                movie.title.length < 25
                                    ? "text-7xl"
                                    : "text-6xl"
                            }`}
                            style={{
                                backgroundImage: `url(${
                                    imagePath + movie.backdrop_path
                                })`,
                            }}
                        >
                            {movie.title}
                        </h2>
                    </div>
                </div>

                {/* description part right side */}
                <div className="w-1/3 h-full flex flex-col gap-6 ">
                    <div className="flex flex-col gap-3 bg-white/15 backdrop-blur-md p-5 rounded-2xl">
                        <h3 className="text-4xl font-extrabold text-white tracking-wide">
                            {movie.title}
                        </h3>

                        <div className="w-16 h-1 bg-red-500 rounded-full"></div>

                        <p className="text-white/80 leading-relaxed text-sm">
                            {movie.overview}
                        </p>
                    </div>

                    <div className=" flex  justify-evenly text-xl text-emerald-500 font-extrabold bg-white/20 h-fit p-2 rounded-xl    ">
                        <p>{movie.release_date}</p>
                        <p>Language: {movie.original_language.toUpperCase()}</p>
                        <p>Rating: ⭐ {movie.vote_average}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 bg-white/10 p-2 rounded-xl">
                        {movie.genre_ids.map((id) => (
                            <span
                                key={id}
                                className="px-3 py-1 text-sm font-semibold text-white bg-sky-500/30 rounded-full"
                            >
                                {movieGenres[id] || "Unknown"}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-3 bg-white/15 p-4 rounded-xl backdrop-blur-md">
                        <span className="text-3xl">⭐</span>

                        <div className="flex flex-col">
                            <p className="text-xl font-bold text-white">
                                {movie.vote_count.toLocaleString()}
                            </p>
                            <p className="text-sm text-white/70">total votes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;
