import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./components/HeroSectionOne/Nav";
import CardContainer from "./components/HeroSectionOne/CardContainer";

const App = () => {
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);

    const [allPokemon, setAllPokemon] = useState([]);

    const getData = async () => {
        const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        );

        const pokemonData = data.results;

        const allSinglePokemon = pokemonData.map((val) => val.url);
        const allSinglePokemonData = await Promise.all(
            allSinglePokemon.map((url) => axios.get(url))
        );

        const finalData = allSinglePokemonData.map((val) => val.data);

        setAllPokemon((prev) => [...prev, ...finalData]);
    };

    useEffect(() => {
        getData();
    }, [offset, limit]);

    return (
        <div>
            <Nav />
            <CardContainer  allPokemon={allPokemon}/>
        </div>
    );
};

export default App;
