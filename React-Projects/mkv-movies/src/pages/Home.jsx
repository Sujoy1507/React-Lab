import { useContext } from "react";
import Movie from "../components/Movie";
import { SearchMovieContextData } from "../context/SearchMovieContext";
import SearchMovies from "../components/search/SearchMovies";

const Home = () => {
    const { movieName } = useContext(SearchMovieContextData);

    return <div>{!movieName ? <Movie /> : <SearchMovies />}</div>;
};

export default Home;
