/*Simule um mini sistema de compras:

Peça o nome do produto
Peça o preço
Pergunte se quer adicionar outro produto
No final, mostre:
Total da compra
Quantidade de itens */


let qtdProdutos = parseInt(prompt("Quantos produtos deseja comprar? "))
let precoProduto = parseFloat(prompt("Qual o preço do produto? "))
let desejaAdicionarMais = prompt("Deseja adicionar outro produto? (sim/não) ")

while (desejaAdicionarMais.toLowerCase() === "sim"){
    qtdProdutos += parseInt(prompt("Quantos produtos deseja comprar? "))
    precoProduto += parseFloat(prompt("Qual o preço do produto? "))
    desejaAdicionarMais = prompt("Deseja adicionar outro produto? (sim/não) ")
}
let totalCompra =  qtdProdutos * precoProduto
let totalprodutos = qtdProdutos

alert(`Total da compra: R$ ${totalCompra.toFixed(2)} \nQuantidade de itens: ${totalprodutos}`)

document.write(`Total da compra: R$ ${totalCompra.toFixed(2)} <br>Quantidade de itens: ${totalprodutos}`)

