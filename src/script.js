let c = 20
let i = 0

async function buscaPokemon() {
    try {
        const pesquisa = document.getElementById('pesquisa').value

        let busca = pesquisa.toLowerCase()

        if(busca == ''){
            alert('Digite o nome de um pokemon!')
        } else{
            // conectando a api
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${busca}`);
            const pokemonData = await response.json();

            // pegando dados da api
            const id = pokemonData.id
            const name = pokemonData.name
            const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
            
            //criando elemento
            const pokedexElement = document.getElementById('pokemonBusca');

            if(i > 0){
                pokedexElement.removeChild(pokedexElement.firstChild)
            }

            const pokemonCard = document.createElement('div');
            pokemonCard.classList.add('pokemon-card-busca');
        
            const pokemonName = document.createElement('p');
            pokemonName.classList.add('pokemon-name');
            pokemonName.innerText = name

            const pokemonImage = document.createElement('img');
            pokemonImage.classList.add('pokemon-image');
            pokemonImage.src = img
            
            // exibindo
            pokemonCard.appendChild(pokemonName);
            pokemonCard.appendChild(pokemonImage);
            pokedexElement.appendChild(pokemonCard);

            i++
        }
        
    } catch (error) {
      console.log(error);
    }
}

async function listaPokemon(n){
    try{
        // conectando a api
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${n}}`);
        const pokemonData = await response.json();

        const array = pokemonData.results
        
        array.forEach(element => {
            //criando elemento
            const pokedexElement = document.getElementById('pokedex');

            const pokemonCard = document.createElement('div');
            pokemonCard.classList.add('pokemon-card');
        
            const pokemonName = document.createElement('p');
            pokemonName.classList.add('pokemon-name');
            pokemonName.innerText = element.name

            const pokemonImage = document.createElement('img');
            pokemonImage.classList.add('pokemon-image');
            const id = element.url.split('/')
            pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id[6]}.png` 

            // exibindo
            pokemonCard.appendChild(pokemonName);
            pokemonCard.appendChild(pokemonImage);
            pokedexElement.appendChild(pokemonCard);           
        });

    }catch(error){console.log(error)}
}

listaPokemon(c)

async function remover(){
    try{
        const pokedexElement = document.getElementById('pokedex');

        let n = 0
        while(n < c){
            pokedexElement.removeChild(pokedexElement.firstChild) 
            n++
        }
        c = c + 20
        
        listaPokemon(c)

    }catch(error){console.log(error)}
}