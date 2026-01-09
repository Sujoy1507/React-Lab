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

const MovieMeta = ({ movie }) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2 bg-white/10 p-2 rounded-xl">
                {movie.genre_ids.map(id => (
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
                    <p className="text-sm text-white/70">
                        total votes
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MovieMeta;
