//crie uma função para verificar se uma pessoa é maior de idade. Essa função precisará receber um objeto como parâmetro. As propriedades nome e idade são OBRIGATÓRIAS. A função deve retornar uma mensagem indicando se a pessoa é maior de idade ou não, utilizando o nome da pessoa na mensagem. Caso o objeto recebido não tenha as propriedades necessárias, a função deve mostrar uma uma mensagem de erro no console e undefined como retorno.

//DICAS: use Object.keys() para verificar as chaves do objeto, depois use condicional if para verificar a pessoa é maior de idade ou não, e use template literals para criar a mensagem de retorno. A verificação das presença das chaves pode ser feita usando o método includes() do array retornado por Object.keys().

function verificaMaiorIdade(pessoa){
    let chaves = Object.keys(pessoa)
    if(!chaves.includes("nome") || !chaves.includes("idade")){
        console.log("Erro: necessário nome e idade!")
        return;

    }
    if(pessoa.idade > 18){
        return `O ${pessoa.nome} é maior de idade!`
    }else{
        return `O ${pessoa.nome} não é maior de idade!`
    }
}

console.log(verificaMaiorIdade({ nome: "Renan", idade: 30}))
