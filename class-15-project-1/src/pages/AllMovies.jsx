import React, { useContext } from "react";
import { MoviesDataContext } from "../context/MovieContext";
import { Link } from "react-router-dom";

const AllMovies = () => {
    const movieData = useContext(MoviesDataContext);


    const imagePath = `https://image.tmdb.org/t/p/w500`;

    return (
        <div className="flex flex-wrap gap-5 justify-center p-4 w-full h-[calc(100vh-110px)] overflow-y-scroll">
            {movieData.length > 0 &&
                movieData.map((movie, index) => {
                    // console.log(movie);
                    return (
                        <Link
                            className="w-[250px] h-[380px] relative overflow-hidden rounded-xl "
                            key={index}
                            to={`/allmovie/${movie.id}`}
                        >
                            <img
                                className="w-full object-cover "
                                src={imagePath + movie.poster_path}
                                alt={movie.title}
                            />
                            <h2
                                className={`absolute text-white bottom-0 bg-sky-300/30 backdrop-blur-md px-3 py-1 w-full h-fit ${
                                    movie.title.length < 15
                                        ? "text-xl"
                                        : movie.title.length < 23
                                        ? "text-md"
                                        : "text-sm"
                                }`}
                            >
                                {movie.title}
                            </h2>
                        </Link>
                    );
                })}
        </div>
    );
};

export default AllMovies;
