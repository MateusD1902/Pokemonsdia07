function onPageLoad(){
    
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(function response(data){

        const promiseData = data.json()
        console.log(promiseData)

      promiseData.then(response =>{
        insertPokemons(response)

        const pokemons = response.results
        
        for (let index = 0; index < pokemons.length; index++) {

            const pokemon = pokemons[index]
    
            const id = index + 1
    
            pokemon.imagem = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png"
            
        adicionarCardPokemon(pokemon)
        }
        })

  /*    promiseData.then(function responseData(response){
        insertUsers(response)
    })*/
   

    })
    loadComponents()

}
function insertPokemons(data){
    console.log(data)

    
}
 
function loadComponents(){
    console.log("loadComponents")


}
function adicionarCardPokemon(pokemon) {

    const imagemElemento = document.createElement("img")
    imagemElemento.setAttribute("src", pokemon.imagem)

    const textoElemento = document.createElement("h1")
    textoElemento.innerHTML = pokemon.name

    const divElemento = document.getElementById("conteudo-pokemon")
    divElemento.appendChild(imagemElemento)
    divElemento.appendChild(textoElemento)
}


