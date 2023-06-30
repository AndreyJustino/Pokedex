async function buscaPokemon() {
    try {
        // conectando a api
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
        const pokemonData = await response.json();


        // pegando dados da api
        const id = pokemonData.id
        const name = pokemonData.forms[0].name
        const img = `raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        
        
    } catch (error) {
      console.log(error);
    }
  }
  
  buscaPokemon();
  
