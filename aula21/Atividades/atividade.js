let cep = '01001000'; //exemplo de cep
const url = `https://viacep.com.br/ws/${cep}/json/`;
let resposta = document.getElementById('resultado'); //elemento onde a resposta será exibida

fetch(url)
    .then(respostaAPI => respostaAPI.json())
    .then( dados => {
        resposta.innerHTML = `
          <p>Logradouro: ${dados.logradouro}</p>
          <p>Localidade: ${dados.localidade}</p>
          <p>UF: ${dados.uf}</p>
          `
    })
    .catch(erro => console.log(erro)); //captura o erro caso haja


//acesse a API viacep e faça uma requisição get para o seu cep. Mostre os dados no console: logradouro, localidade, uf

// let cep = '01001000';
// const url = `https://viacep.com.br/ws/${cep}/json/`;

// let resposta = document.getElementById('resultado');

// fetch(url)
//     .then(respostaAPI => respostaAPI.json())
//     .then(dados => {
//         console.log("Logradouro:", dados.logradouro);
//         console.log("Localidade:", dados.localidade);
//         console.log("UF:", dados.uf);

//         resposta.innerHTML = `
//             <p>Logradouro: ${dados.logradouro}</p>
//             <p>Localidade: ${dados.localidade}</p>
//             <p>UF: ${dados.uf}</p>
//         `;
//     })
//     .catch(erro => console.log("Erro:", erro));