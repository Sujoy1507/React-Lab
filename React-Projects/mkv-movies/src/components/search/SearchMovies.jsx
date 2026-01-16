import React, { useContext } from "react";
import { SearchMovieContextData } from "../../context/SearchMovieContext";
import SearchSingleMovie from "./SearchSingleMovie";

const SearchMovies = () => {
    const { searchMovies } = useContext(SearchMovieContextData);
    console.log(searchMovies);
    return (
        <div
            id="moviepage"
            className="bg-slate-800 w-full h-[calc(100vh-140px)] p-3 flex flex-wrap  gap-2 overflow-y-scroll "
        >
            {searchMovies.map((movie, index) => {
                return (
                    <div key={index}>
                        <SearchSingleMovie
                            title={movie.title}
                            poster={movie.poster_path}
                            id={movie.id}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default SearchMovies;
