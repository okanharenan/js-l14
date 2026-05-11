//crie uma interface que tenha um campo de input e um botão. O usuário usará esse campo para fazer uma pesquisa de filme ou série. 
//use a api da OMDB para buscar o filme ou serie. Mostre os dados do primeiro filme ou serie na interface.

//EVENTOS : click 
//métodos de seleção de elementos: querySelector, querySelectorAll
//métodos de manipulação de elementos: innerHTML, createElement, appendChild


// const input = document.querySelector('#input');
// const button = document.querySelector('#button');
// const resultado = document.querySelector('#resultado');

// button.addEventListener('click', () => {
//     const quey = input.value;
//     const url = `http://www.omdbapi.com/?t=${quey}&apikey=YOUR_API_KEY`;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => { 
//             resultado.innerHTML = ` 
//                 <h2>${data.Title}</h2>
//                 <p>Ano: ${data.Year}</p>
//                 <p>Gênero: ${data.Genre}</p>
//                 <p>Diretor: ${data.Director}</p>
//                 <img src="${data.Poster}" alt="Poster do filme">
//             `
//         }).catch(error => {
//             console.error('Erro ao buscar dados:', error);
//         })


const input = document.querySelector('#searchInput');
const button = document.querySelector('#searchButton');
const resultado = document.querySelector('#results');

button.addEventListener('click', () => {

    const query = input.value.trim();

    // validação
    if (!query) {
        resultado.innerHTML = '<p>Digite um filme ou série.</p>';
        return;
    }

    const url = `https://www.omdbapi.com/?t=${query}&apikey=6e143920`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            // filme não encontrado
            if (data.Response === 'False') {
                resultado.innerHTML = '<p>Filme ou série não encontrado.</p>';
                return;
            }

            // limpa resultado anterior
            resultado.innerHTML = '';

            // cria elementos
            const titulo = document.createElement('h2');
            titulo.textContent = data.Title;

            const ano = document.createElement('p');
            ano.textContent = `Ano: ${data.Year}`;

            const genero = document.createElement('p');
            genero.textContent = `Gênero: ${data.Genre}`;

            const diretor = document.createElement('p');
            diretor.textContent = `Diretor: ${data.Director}`;

            const poster = document.createElement('img');
            poster.src = data.Poster;
            poster.alt = `Poster de ${data.Title}`;

            // adiciona elementos
            resultado.appendChild(titulo);
            resultado.appendChild(ano);
            resultado.appendChild(genero);
            resultado.appendChild(diretor);
            resultado.appendChild(poster);

        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);

            resultado.innerHTML = '<p>Erro ao buscar dados.</p>';
        });

});