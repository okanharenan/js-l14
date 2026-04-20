//crie um objeto que represente um usuário com : nome, email, cargo, idade, senha e telefone
//essas informações deverão ser solicitadas ao usuário e armazenadas no objeto
//ao final mostre cada uma das informações armazenadas no objeto no console no seguinte formato

//nome: valor
//email: valor
//cargo: valor
//idade: valor
//senha: valor
//telefone: valor
let usuário = {
    nome: '',
    email: '',
    cargo: '',
    idade: 0,
    senha: '',
    telefone:''

}

for(let chave in usuário){
    let valor = prompt(`Digite o(a) ${chave}: `);
    if (chave === 'idade'){
        valor= parseInt(valor);
    }
    usuário[chave] = valor;
}

console.log('=== Informações do usuário === ');

for(let chave in usuário){
    console.log(`${chave}: ${usuário[chave]}`);
}