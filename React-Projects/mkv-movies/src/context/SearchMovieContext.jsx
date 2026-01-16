import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const SearchMovieContextData = createContext();

const SearchMovieContext = ({ children }) => {
    const apiKey = `a2a0c50a89ba45eac3d3df4272eac703`;
    const [movieName, setMovieName] = useState("");


    const [searchMovies, setSearchMovies] = useState([]);

    const getSearchMovie = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`
        );
        setSearchMovies(data.results);
    };
// DELETE THIS
    useEffect(() => {
        getSearchMovie();
    }, [movieName]);

    const valueData = {
        setMovieName,
        searchMovies,
        movieName
    }

    return (
        <div>
            <SearchMovieContextData.Provider value={valueData}>
                {children}
            </SearchMovieContextData.Provider>
        </div>
    );
};

export default SearchMovieContext;
