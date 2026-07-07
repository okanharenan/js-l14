
// const {
//     abrirConta,
//     depositar,
//     sacar,
//     extrato
// } = require('./operacoesBancarias')

// let conta1 = abrirConta("João", 12345, 678, 1000)

// depositar(conta1, 500)
// sacar(conta1, 200)
// extrato(conta1)

// const fs = require("fs");

// try {
//     // Lê os arquivos
//     const texto1 = fs.readFileSync("texto1.txt", "utf8");
//     const texto2 = fs.readFileSync("texto2.txt", "utf8");

//     // Concatena os conteúdos
//     const textoFinal = texto1 + "\n" + texto2;

//     // Escreve no terceiro arquivo
//     fs.writeFileSync("texto3.txt", textoFinal);

//     console.log("Arquivo texto3.txt criado com sucesso!");
// } catch (erro) {
//     console.log("Erro ao ler ou escrever os arquivos:");
//     console.log(erro.message);
// }

const banco = require("./banco");

// Ler todo o JSON
console.log("Banco:");
console.log(banco.lerJSON());

// Buscar uma fruta
console.log("\nBuscar fruta:");
console.log(banco.buscarPorId("frutas", 2));

// Buscar um legume
console.log("\nBuscar legume:");
console.log(banco.buscarPorId("legumes", 5));

// Buscar um item inexistente
console.log("\nBuscar inexistente:");
console.log(banco.buscarPorId("frutas", 10));

// Exemplo de alteração e gravação
let dados = banco.lerJSON();

dados.frutas.push({
    id: 5,
    nome: "Uva",
    preco: 4
});

banco.escreverJSON(dados);

console.log("\nNova fruta adicionada com sucesso!");