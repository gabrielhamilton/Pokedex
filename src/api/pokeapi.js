const api = 'http://pokeapi.co/api/v2';
const tipo ={
    pokemon: 'pokemon'
}

export async function fetchPokemon(pokemon){
    /*console.log(`${api}/${tipo.pokemon}/${pokemon}`);*/
    return fetch(`${api}/${tipo.pokemon}/${pokemon}`)
}