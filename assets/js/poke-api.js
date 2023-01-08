//objetos e funcoes de manipulacoes

const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) =>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    //fetch retorna uma promisse uma promessa de resposta por padrao fetch usa get
return fetch(url)
.then((response) => response.json())
.then((jsonBody) => jsonBody.results)
.catch((error)=> console.error(error))
}