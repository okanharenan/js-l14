const fs = require("fs");

const caminho = "./banco.json";

// Ler o arquivo JSON
function lerJSON() {
    const dados = fs.readFileSync(caminho, "utf8");
    return JSON.parse(dados);
}

// Escrever um objeto no arquivo JSON
function escreverJSON(objeto) {
    fs.writeFileSync(caminho, JSON.stringify(objeto, null, 4), "utf8");
}

// Buscar um objeto por coleção e id
function buscarPorId(colecao, id) {
    const banco = lerJSON();

    // Verifica se a coleção existe
    if (!banco[colecao]) {
        return `A coleção "${colecao}" não existe.`;
    }

    const resultado = banco[colecao].find(item => item.id === id);

    if (!resultado) {
        return `Objeto com id ${id} não encontrado na coleção "${colecao}".`;
    }

    return resultado;
}

module.exports = {
    lerJSON,
    escreverJSON,
    buscarPorId
};