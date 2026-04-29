let vendas2025= [
    { mes: 'Janeiro', valor: 1000 },
    { mes: 'Fevereiro', valor: 1500 },
    { mes: 'Março', valor: 2000 },
    { mes: 'Abril', valor: 2500 },
    { mes: 'Maio', valor: 3000 },    
    { mes: 'Junho', valor: 3500 },
    { mes: 'Julho', valor: 4000 },
    { mes: 'Agosto', valor: 4500 },
    { mes: 'Setembro', valor: 5000 },
    { mes: 'Outubro', valor: 5500 },
    { mes: 'Novembro', valor: 6000 },
    { mes: 'Dezembro', valor: 6500 }
]

//Calcule qual o total de vendas de 2024 e 2025, considerando que o somatório do ano anterior foi de 50000
let total2025 = vendas2025.reduce((acc, venda) =>{
    return acc + venda.valor
},0)

let total2024 = 5000

let totalGeral = total2025 + total2024

console.log(`Faturado em 2024 R$ ${total2024}`)
console.log(`Faturado em 2025 R$ ${total2025}`)
console.log(`Total faturado em 2024 e 2025 R$ ${totalGeral}`)

//Calculo do valor total do estoque do cleitinho magazine

let estoque = [
    { produto: 'Camiseta', quantidade: 100, precoUnitario: 50 },
    { produto: 'Calça', quantidade: 50, precoUnitario: 100 },
    { produto: 'Tênis', quantidade: 30, precoUnitario: 200 },
    { produto: 'Jaqueta', quantidade: 20, precoUnitario: 150 },
    { produto: 'Bermuda', quantidade: 40, precoUnitario: 80 }
]

let valorTotalEstoque = estoque.reduce((acc, item) =>{
    return acc + (item.quantidade * item.precoUnitario)
}, 0)

console.log(`Valor total do estoque do clietinho R$ ${valorTotalEstoque}`)