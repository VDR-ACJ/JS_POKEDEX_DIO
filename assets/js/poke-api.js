//objetos e funcoes de manipulacoes

const pokeApi = {}

pokeApi.getPokemonsDetail = (pokemon) =>{
    //busca os detalhes pela url vinda no resultado da primeira consulta
    return fetch(pokemon.url).then((response) => response.json())
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