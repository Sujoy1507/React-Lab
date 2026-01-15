import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AllMoviesDataContext } from "../context/AllMoviesContext";
import MovieGenere from "./MovieGenere";
import MovieFavorite from "./MovieFavorite";
import MovieInfo from "./MovieInfo";
import MovieOverview from "./MovieOverview";

const MovieDetails = () => {
    const imgPath = `https://image.tmdb.org/t/p/w500`;

    const { id } = useParams();

    const allMovie = useContext(AllMoviesDataContext);
    const movie = allMovie.find((movie) => movie.id === Number(id));
    console.log(movie);
    if (!movie) {
        return (
            <div className="w-full h-[calc(100vh-140px)]  bg-slate-900 text-pink-500 font-bold flex justify-center items-center text-6xl">
                Loading...
            </div>
        );
    }
    const imageUrl = `${imgPath}${movie.backdrop_path}`;

    return (
        <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className="w-full h-[calc(100vh-140px)]  bg-cover bg-center flex "
        >
            <div className="backdrop-blur-sm w-full h-full p-2 flex">
                <div className=" w-2/3 h-full p-2">
                    <img
                        className=" w-full h-3/4 object-cover  rounded-xl"
                        src={imageUrl}
                        alt=""
                    />
                    <h2 className=" w-full h-1/4 text-6xl text-white font-bold flex justify-center items-center">
                        {movie.title}
                    </h2>
                </div>

                <div id="movieDetails" className="w-1/3 h-full flex overflow-y-scroll flex-col gap-5 justify-evenly">
                    <MovieOverview
                        title={movie.title}
                        overview={movie.overview}
                    />

                    <MovieInfo
                        releaseDate={movie.release_date}
                        language={movie.original_language}
                        rating={movie.vote_average}
                        votes={movie.vote_count}
                    />

                    <MovieGenere genreIds={movie.genre_ids} />

                    <MovieFavorite popularity={movie.popularity} />
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
