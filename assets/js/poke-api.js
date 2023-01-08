//objetos e funcoes de manipulacoes

const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    
    return pokemon
}

pokeApi.getPokemonsDetail = (pokemon) =>{
    //busca os detalhes pela url vinda no resultado da primeira consulta
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)

}

pokeApi.getPokemons = (offset = 0, limit = 5) =>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    //fetch retorna uma promisse uma promessa de resposta por padrao fetch usa get
return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons)=> pokemons.map(pokeApi.getPokemonsDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails)=>pokemonsDetails)
    .catch((error)=> console.error(error))
    }

//https://pokeapi.co/api/v2/pokemon/1/
//lista de promessas
/*Promise.all(
    fetch('https://pokeapi.co/api/v2/pokemon/1/'),
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
).then((results) =>{
    console.log("results");
})*/