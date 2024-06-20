document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://hp-api.onrender.com/api/characters';
    const grid = document.querySelector('.grid');

    // Función para obtener y mostrar los personajes desde la API
    async function fetchCharacters() {
        try {
            const response = await fetch(apiUrl);
            const characters = await response.json();
            renderCharacters(characters);
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    }

    // Función para renderizar los personajes en la grilla
    function renderCharacters(characters) {
        grid.innerHTML = '';

        characters.forEach(character => {

            const card = document.createElement('div');
            card.classList.add('card');


            const img = document.createElement('img');
            img.src = character.image;
            img.alt = character.name;


            const name = document.createElement('h1');
            name.textContent = character.name;


            const info = document.createElement('p');
            if (character.house) {
                info.textContent += `Casa: ${character.house} `;
            }
            if (character.ancestry) {
                info.textContent += `Ancestry: ${character.ancestry} `;
            }
            if (character.wand) {
                info.textContent += `Varita: ${character.wand} `;
            }
            if (character.patronus) {
                info.textContent += `Patronus: ${character.patronus} `;
            }


            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(info);


            grid.appendChild(card);
        });
    }

    // Cargar los personajes al cargar la página
    fetchCharacters();
});
