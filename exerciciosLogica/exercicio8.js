/* Exercício 8: Soma e Média de Array
Peça 5 números, armazene em array, calcule soma e média. Use laço for. */

// Código do exercício:
let array = [];

for (let i = 0;  i <5; i++){
    let num = parseInt(prompt(`Digite o ${i+1}° número: `))
    array.push(num)
}
let soma = 0
for(let num of array){
    soma+= num
}
let media = soma / array.length
console.log(`array: [${array.join(', ')}]`)
console.log(`Soma: ${soma}`)
console.log(`Média: ${media.toFixed(2)}`)
alert(`Soma: ${soma.toFixed(2)}\nMédia: ${media.toFixed(2)}`)