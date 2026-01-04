import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home/Home";

import axios from "axios";

const App = () => {
    const [limit, setLimit] = useState(6);
    const [offset, setOffset] = useState(0);

    const [allPokemon, setAllPokemon] = useState([]);

    const getAPI = async () => {
        // Main URL Fetch

        const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        );

        // Main URL Single Url Fetch
        const allPokeURL = data.results.map((val) => val.url);

        // Single Pokemon Data Fetch
        const response = await Promise.all(
            allPokeURL.map((val) => axios.get(val))
        );
        const allpoke = response.map((val) => val.data);
        console.log(allpoke);

        // Set UseState for allPokemon Array
        // setAllPokemon((prev) => [...prev, ...allpoke]);
        setAllPokemon(allpoke);
    };

    const nextSixBtn = () => {
        setOffset((prev) => prev + limit);
    };
    const prevSixBtn = () => {
        setOffset((prev) => Math.max(0, prev - limit));
    };
    useEffect(() => {
        getAPI();
    }, [limit, offset]);

    return (
        <div className="w-full h-screen bg-linear-to-bl from-emerald-600 via-zinc-700 to-slate-400">
            <div className="sticky top-0 z-50">
                <Nav />
            </div>
            <Home val={allPokemon} next={nextSixBtn} prev={prevSixBtn} />
        </div>
    );
};

export default App;
