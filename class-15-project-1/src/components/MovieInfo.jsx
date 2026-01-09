const MovieInfo = ({ movie }) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 bg-white/15 backdrop-blur-md p-5 rounded-2xl">
                <h3 className="text-4xl font-extrabold text-white tracking-wide">
                    {movie.title}
                </h3>

                <div className="w-16 h-1 bg-red-500 rounded-full"></div>

                <p className="text-white/80 leading-relaxed text-sm">
                    {movie.overview}
                </p>
            </div>

            <div className="flex justify-evenly text-xl text-emerald-500 font-extrabold bg-white/20 p-2 rounded-xl">
                <p>{movie.release_date}</p>
                <p>Language: {movie.original_language.toUpperCase()}</p>
                <p>Rating: ⭐ {movie.vote_average}</p>
            </div>
        </div>
    );
};

export default MovieInfo;
