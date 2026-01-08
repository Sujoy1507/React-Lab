import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MoviesDataContext = createContext();

const MovieContext = ({ children }) => {
    const ApiKey = `a2a0c50a89ba45eac3d3df4272eac703`;

    const [moviesData, setMoviesData] = useState([]);

    const getAllMovies = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`
        );
        setMoviesData(data.results);
    };

    useEffect(() => {
        getAllMovies();
    }, []);

    return (
        <div>
            <MoviesDataContext.Provider value={moviesData}>
                {children}
            </MoviesDataContext.Provider>
        </div>
    );
};

export default MovieContext;
