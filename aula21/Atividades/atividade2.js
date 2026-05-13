const input = document.querySelector('#searchInput');
const button = document.querySelector('#searchButton');
const resultado = document.querySelector('#results');

button.addEventListener('click', () => {

    const query = input.value.trim();

    if (!query) {
        resultado.innerHTML = '<p>Digite um filme ou série.</p>';
        return;
    }

    const url = `https://www.omdbapi.com/?s=${query}&apikey=6e143920`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            resultado.innerHTML = '';

            if (data.Response === 'False') {
                resultado.innerHTML = '<p>Nenhum resultado encontrado.</p>';
                return;
            }

            data.Search.forEach(item => {

                const card = document.createElement('div');
                card.classList.add('card');

                const titulo = document.createElement('h3');
                titulo.textContent = item.Title;

                const ano = document.createElement('p');
                ano.textContent = `Ano: ${item.Year}`;

                const tipo = document.createElement('p');
                tipo.textContent = `Tipo: ${item.Type}`;

                const poster = document.createElement('img');
                poster.src = item.Poster !== 'N/A' 
                    ? item.Poster 
                    : 'https://via.placeholder.com/150';
                poster.alt = item.Title;

                card.appendChild(titulo);
                card.appendChild(ano);
                card.appendChild(tipo);
                card.appendChild(poster);

                // estilo simples
                card.style.border = '1px solid #ccc';
                resultado.appendChild(card);
            });

        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
            resultado.innerHTML = '<p>Erro ao buscar dados.</p>';
        });
});