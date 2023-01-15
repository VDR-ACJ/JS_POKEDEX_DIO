/*const btnTest = document.getElementById("btn_teste");
btnTest.addEventListener("click", function (){
    alert('clicou');
})*/

/*fetch api js*/
const pokemonList = document.getElementById("pokemonList")
const loadMoreButton = document.getElementById("loadMoreButton")
const limit = 10
let offset = 0;
const maxRecords = 151;



function loadPokemonsItens(offset, limit ){
    pokeApi.getPokemons(offset, limit).then((pokemons = [])=> {
        //debugger adiciona um break point no browser
        //debugger
        //console.log(pokemonList)
        //value é o item da lista o map vai converter a lista
        //o Map neste caso substirui o for
        /*const newList = pokemons.map((pokemon)=>{
            return convertPokemonToLi(pokemon)
        })*/

        const newHtml_official = pokemons.map((pokemon) =>
            `<li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span> 
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>

                        <img src="${pokemon.photo_back}" 
                            alt="${pokemon.name}">
                    </div>
                    
            </li>`).join('')

            const newHtml = pokemons.map((pokemon) =>
            `<li class="pokemon">
            <div class="flip-card ">
                <div class="flip-card-inner">
                    <div class="flip-card-front ${pokemon.type}">
                    <span class="img-pokebola"><img src="./assets/img/pixel-art-poke-ball.png" 
                     alt="pokebola"></span>
                    <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span> 
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>

                        <img src="${pokemon.photo}" 
                            alt="${pokemon.name}">
                    </div>
                    </div>
                    <div class="flip-card-back ${pokemon.type}">
                    
                        <div class="detail">
                            <ol class="types">
                               <li>Weight: ${pokemon.weight} "</li>
                               <li>height: ${pokemon.height} lb</li>
                            </ol>
    
                            <img src="${pokemon.photo_back}" 
                                alt="${pokemon.name}">
                    
                    </div>
                </div>
                </div>
        </li>`).join('')

        
        /*for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            //console.log(convertPokemonToLi(pokemon)) 
            listItens.push(convertPokemonToLi(pokemon))
        }*/
        //pokemonList.innerHTML +=newHtml
        pokemonList.innerHTML +=newHtml
    })
    .catch((error)=> console.error(error))
    .finally(() =>console.log('Requisição concluída!'))
}

loadPokemonsItens(offset, limit )

loadMoreButton.addEventListener('click',() =>{
    offset +=limit
    const qtdRecordNextPage = offset + limit

    if(qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonsItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonsItens(offset, limit)
    }
    
})