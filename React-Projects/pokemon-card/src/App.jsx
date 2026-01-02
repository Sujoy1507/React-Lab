import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./components/HeroSectionOne/Nav";

const App = () => {
    const [limit, setLimit] = useState(100);
    const [offset, setOffset] = useState(20);

    const [allPokemon, setAllPokemon] = useState([]);

    const getData = async () => {
        const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        );

        console.log(data.results[0].url);

        let pokeURL = data.results[0].url;
        const pokemonData = await axios.get(pokeURL);

        console.log(pokemonData.data);
        setAllPokemon(data.results);
    };

    useEffect(() => {
        getData();
    }, [offset, limit]);

    return (
        <div>
            <Nav/>
        </div>
    );
};

export default App;
