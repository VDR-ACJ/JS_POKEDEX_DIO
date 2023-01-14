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

        const newHtml = pokemons.map((pokemon) =>
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

            const newHtml2 = pokemons.map((pokemon) =>
            `<li class="pokemon ${pokemon.type}">
            <div class="flip-card ">
                <div class="flip-card-inner">
                  <div class="flip-card-front pokemon grass">
                    
                   
                        <span class="number">#1</span>
                        <span class="name">bulbasaur</span> 
                            <div class="detail">
                                <ol class="types">
                                    <li class="type grass">grass</li><li class="type poison">poison</li>
                                </ol>
        
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="bulbasaur">
                            </div>
                            
                    

                  </div>
                  <div class="flip-card-back">
                    <h1>John Doe</h1> 
                    <p>Architect &amp; Engineer</p> 
                    <p>We love that guy</p>
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