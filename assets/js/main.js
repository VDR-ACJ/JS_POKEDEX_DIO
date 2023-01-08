/*const btnTest = document.getElementById("btn_teste");
btnTest.addEventListener("click", function (){
    alert('clicou');
})*/

/*fetch api js*/

function convertPokemonToLi(pokemon){
    return `<li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>
    
    <div class="detail">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
        </ol>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
            alt="${pokemon.name}">
    </div>
    
</li>`


}

const pokemonList = document.getElementById("pokemonList")

pokeApi.getPokemons().then((pokemons = [])=> {
        //debugger adiciona um break point no browser
        //debugger
        //console.log(pokemonList)
        //value é o item da lista o map vai converter a lista
        //o Map neste caso substirui o for
        /*const newList = pokemons.map((pokemon)=>{
            return convertPokemonToLi(pokemon)
        })*/

        //const newHtml = newList.join('')
        /*for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            //console.log(convertPokemonToLi(pokemon)) 
            listItens.push(convertPokemonToLi(pokemon))
        }*/
        //pokemonList.innerHTML +=newHtml
        pokemonList.innerHTML +=pokemons.map(convertPokemonToLi).join('')
    })
    .catch((error)=> console.error(error))
    .finally(() =>console.log('Requisição concluída!'))

