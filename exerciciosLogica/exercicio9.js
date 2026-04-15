/* Exercício 9: Verificar Palíndromo
Peça uma palavra ou frase e verifique se é palíndromo (lê igual invertida, ignorando espaços e maiúsc/minúsc).
Use laço para inverter. */

// Código do exercício:

let frase = prompt("Digite uma frase para verificar se é polindromo: ").toLocaleLowerCase().replace(/\s/g, '')
let invertida = ''
for (let i = frase.length - 1; i >=0; i--){
    invertida += frase[i]
}

let fraseInvertida = frase === invertida
console.log(`Frase: ${frase}`)
console.log(`Invertida: ${invertida}`)
alert( fraseInvertida ? `A frase "${frase}" é palíndromo!` : `A frase "${frase}" não é palíndromo!` )