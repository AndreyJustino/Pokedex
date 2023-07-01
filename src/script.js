async function buscaPokemon() {
    try {
        const busca = document.getElementById('pesquisa').value

        // conectando a api
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${busca}`);
        const pokemonData = await response.json();

        // pegando dados da api
        const id = pokemonData.id
        const name = pokemonData.name
        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        
        //criando elemento
        const pokedexElement = document.getElementById('pokedex');

        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');
      
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
        
    } catch (error) {
      console.log(error);
    }
  }

