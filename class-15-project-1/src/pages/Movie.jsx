import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MoviesDataContext } from "../context/MovieContext";
import MovieHero from "../components/MovieHero";
import MovieInfo from "../components/MovieInfo";
import MovieMeta from "../components/MovieMeta";

const Movie = () => {
    const imagePath = `https://image.tmdb.org/t/p/w500`;

    const { id } = useParams();
    const movieData = useContext(MoviesDataContext);
    const movie = movieData.find((movie) => movie.id === Number(id));
    console.log(movie);

    return (
        <div
            className={` w-full h-[calc(100vh-70px)]   bg-cover bg-center bg-no-repeat `}
            style={{
                backgroundImage: `url(${imagePath + movie.backdrop_path})`,
            }}
        >
            <div className="w-full h-full backdrop-blur-2xl p-2 flex gap-4">
                {/* Image and title part left side */}
                <MovieHero movie={movie} />


                {/* please remove this  */}
                <div className="">sujoy</div>

                {/* description part right side */}
                <div className="w-1/3 h-full flex flex-col gap-6 ">
                    <MovieInfo movie={movie} />
                    <MovieMeta movie={movie} />
                </div>
            </div>
        </div>
    );
};

export default Movie;
