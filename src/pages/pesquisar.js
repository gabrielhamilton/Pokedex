import React from "react";
import Search from '../components/search';
import { fetchPokemon } from "../api/pokeapi";
import PokeData from '../components/data';
import { Alert } from 'react-bootstrap';



export default function Pesquisar(){
    const [pokemon,setpoke] = React.useState();
    const [load, setload] = React.useState(false);
    const [error, seterror] = React.useState(false);

    const getPokemon = async (query) =>{
        if(!query) return seterror(true);
           /* console.log('vazio');*/
            seterror(false);
            setload(true);
            setTimeout(async ()=>{
            try{
                const response = await fetchPokemon(query);
                const results = await response.json();
                console.log(results);
                setpoke(results);
                setload(false);
            } catch(err){
                console.log(err);
                setload(false);
                seterror(true);
            }
        },1000);
    }
    return(
        <div>
            {error ?(
                <Alert variant='dark'>
                    Você precisa digitar o nome do Pokemon ! 
                </Alert>
            ): null}

            <Search getPokemon={getPokemon} />

            {!load && pokemon ? (
               <PokeData 
               name={pokemon.name}
               sprite={pokemon.sprites.front_default}
               types={pokemon.types}
               abilities={pokemon.abilities}
               height={pokemon.height}
               weight={pokemon.weight}
               stats={pokemon.stats}
               />
            ): null }
        </div>
    )
}