document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://hp-api.onrender.com/api/characters';
    const grid = document.querySelector('.grid');

    // Función para obtener y mostrar los personajes desde la API
    async function fetchCharacters() {
        try {
            const response = await fetch(apiUrl);
            const characters = await response.json();

            // Filtrar personajes que tienen imagen
            const charactersWithImage = characters.filter(character => character.image);

            renderCharacters(charactersWithImage);
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

            const name = document.createElement('h2');
            name.textContent = character.name;

            const info = document.createElement('ul');

            if (character.house) {
                const houseItem = document.createElement('li');
                houseItem.innerHTML = `<strong>Casa:</strong> ${character.house}`;
                info.appendChild(houseItem);
            }

            if (character.ancestry) {
                const ancestryItem = document.createElement('li');
                ancestryItem.innerHTML = `<strong>Ancestry:</strong> ${character.ancestry}`;
                info.appendChild(ancestryItem);
            }

            if (character.wand) {
                const wandItem = document.createElement('li');
                const wandDetails = `<strong>Varita:</strong><br> <strong>Wood</strong> - ${character.wand.wood}<br> <strong>Core</strong> - ${character.wand.core}<br> <strong>Length</strong> - ${character.wand.length}"`;
                wandItem.innerHTML = wandDetails;
                info.appendChild(wandItem);
            }


            if (character.patronus) {
                const patronusItem = document.createElement('li');
                patronusItem.innerHTML = `<strong>Patronus:</strong> ${character.patronus}`;
                info.appendChild(patronusItem);
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
