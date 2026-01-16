import React, { useContext, useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { SearchMovieContextData } from "../context/SearchMovieContext";

const Search = () => {
    const {setMovieName} = useContext(SearchMovieContextData);
    const [clickMovieName, setClickMovieName] = useState("");
    const searchClickFunction = () => {
        setMovieName(clickMovieName);
    };

    return (
        <div className="bg-pink-600 px-7 py-3 text-white gap-5 items-center capitalize flex w-full justify-between">
            <button
                onClick={() => {
                    searchClickFunction();
                }}
            >
                <SearchIcon size={30} />
            </button>
            <input
                className="border-2 w-[300px] outline-none rounded-full px-5 py-1"
                type="text"
                onChange={(event) => {
                    setClickMovieName(event.target.value);
                }}
                placeholder="Search movie"
            />

            <div className=" w-full font-bold text-xl hidden md:block ">
                Search by name
            </div>
        </div>
    );
};

export default Search;
