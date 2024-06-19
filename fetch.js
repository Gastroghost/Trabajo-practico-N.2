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
            // Crear elemento de tarjeta para cada personaje
            const card = document.createElement('div');
            card.classList.add('card');

            // Imagen del personaje
            const img = document.createElement('img');
            img.src = character.image;
            img.alt = character.name;

            // Nombre del personaje
            const name = document.createElement('h1');
            name.textContent = character.name;

            // Información (house, ancestry, wand, patronus)
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

            // Agregar elementos a la tarjeta
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(info);

            // Agregar tarjeta a la grilla
            grid.appendChild(card);
        });
    }

    // Cargar los personajes al cargar la página
    fetchCharacters();
});
