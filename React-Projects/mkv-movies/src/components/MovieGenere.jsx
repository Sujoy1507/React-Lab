import React from "react";

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
  37: "Western"
};

const MovieGenere = ({ genreIds }) => {
  return (
    <div className="bg-slate-900/30 rounded-xl backdrop-blur-2xl p-4">
      <h3 className="text-lg font-bold text-white mb-3">
        Genres
      </h3>

      <div className="flex flex-wrap gap-3">
        {genreIds.map(id => (
          <span
            key={id}
            className="px-4 py-1 rounded-full bg-pink-600/80 text-white text-sm font-semibold"
          >
            {movieGenres[id]}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MovieGenere;
