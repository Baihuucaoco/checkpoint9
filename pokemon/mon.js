
function searchPokemon() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    
    // Make API call to get Pokemon data
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
      .then(response => response.json())
      .then(data => {
        const pokemonInfo = document.getElementById("pokemonInfo");
        const pokemonImage = document.getElementById("pokemonImage");
  
        pokemonInfo.innerHTML = `
          <h2>Name: ${data.name}</h2>
          <p>Type: ${data.types[0].type.name}</p>
          <p>Height: ${data.height}</p>
          <p>Weight: ${data.weight}</p>
          <p>Bio: Some text about ${data.name}</p>
        `;
  
        pokemonImage.innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}">`;
      })
      .catch(error => {
        console.log("Pokemon not found:", error);
        alert("Pokemon not found. Please try again.");
      });
  }
  