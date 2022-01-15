import React from "react";
import Search from '../components/search';
import { fetchPokemon } from "../api/pokeapi";
import PokeData from '../components/data';

export default function Pesquisar(){

    const [pokemon,setpoke] = React.useState();
    const [load, setload] = React.useState(false);


    const getPokemon = async (query) =>{
    setload(true);
     const response = await fetchPokemon(query);
     const results = await response.json();
     console.log(results);
     setpoke(results);
     setload(false);
    }

    return(
        <div>
            <Search getPokemon={getPokemon} />
            {!load && pokemon ? (
               <PokeData 
               name={pokemon.name}
               sprite={pokemon.sprites.front_default}
               types={pokemon.types}
               abilities={pokemon.abilities}
               height={pokemon.height}
               weight={pokemon.weight}
               />
            ): null }
        </div>
    )
}