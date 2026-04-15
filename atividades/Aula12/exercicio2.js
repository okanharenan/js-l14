//crie um sistema de emissão de nota fiscal. 
//o sistema deve receber um array com os nomes dos produtos e outro com os valores desses produtos. 
//Ao iniciar o programa, o usuário deve informar quantos produtos ele deseja cadastrar nessa nota fiscal.
//Você deverá ler o nome e o valor de cada produto  e adiconar ao seu respectivo array.
//DICA: para trabalhar com índices ou métodos, as variáveis devem ser declaradas fora do laço e inicializadas com um array vazio.

//Ao final mostre no console a nota fiscal com os produtos e seus respectivos valores.
//Exemplo: PARA 3 PRODUTOS  
//PRODUTO1 - R$ 10,00
//PRODUTO2 - R$ 15,00
//PRODUTO3 - R$ 20,00

let produtos = []
let precos = []
let quantidade = parseInt(prompt("Quantos produtos deseja cadastrar? "))

for (let i= 0; i< quantidade; i++){
    let nomeProduto = prompt (`Digite o nome do produto ${i+1}°: `)
    let precoProduto = parseFloat(prompt (`Digite o preço do produto ${i+1}°: `))
    produtos.push(nomeProduto)
    precos.push(precoProduto)
}

console.log("Nota Fiscal:")
for (let i = 0; i < produtos.length; i++){
    console.log(`${produtos[i]} - R$ ${precos[i].toFixed(2)}`)
}