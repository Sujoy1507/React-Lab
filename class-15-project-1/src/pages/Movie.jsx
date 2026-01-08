import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MoviesDataContext } from "../context/MovieContext";

const Movie = () => {
    const imagePath = `https://image.tmdb.org/t/p/w500`;

    const { id } = useParams();
    const movieData = useContext(MoviesDataContext);
    const movie = movieData.find((movie) => movie.id === Number(id));
    console.log(movie);

    return (
        <div className="w-[60vw] h-[60vh]">
            <img className="w-full  object-cover h-full" src={imagePath + movie.backdrop_path} alt="" />
        </div>
    );
};

export default Movie;
