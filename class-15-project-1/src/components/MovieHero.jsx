const imagePath = "https://image.tmdb.org/t/p/w500";

const MovieHero = ({ movie }) => {
    return (
        <div className="w-2/3 h-full flex flex-col gap-2">
            <img
                className="w-full h-3/4 rounded-md object-cover"
                src={imagePath + movie.backdrop_path}
                alt={movie.title}
            />

            <div className="h-1/4 bg-white/35 rounded-xl px-20 py-2">
                <h2
                    className={`h-full flex justify-center items-center scale-x-[1.1] font-bold bg-cover bg-center text-transparent bg-clip-text ${
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
    );
};

export default MovieHero;
