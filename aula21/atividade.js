let cep = '01001000'; //exemplo de cep
const url = `https://viacep.com.br/ws/${cep}/json/`;

fetch(url)
    .then(respostaAPI => respostaAPI.json())
    .then( dados => {
        console.log(dados.logradouro);
        console.log(dados.localidade);
        console.log(dados.uf);
    })
    .catch(erro => console.log(erro)); //captura o erro caso haja


//acesse a API viacep e faça uma requisição get para o seu cep. Mostre os dados no console: logradouro, localidade, uf