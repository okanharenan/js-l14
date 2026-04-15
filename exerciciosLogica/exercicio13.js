/* Exercício 13: Contar Vogais em String
Peça uma frase e conte quantas vogais (a,e,i,o,u) ela tem, maiúsc/minúsc. Use laço e if. */

// Código do exercício:
let frase = prompt("Digite uma frase: ");
let vogais = 'aeiouAEIOU';
let contador = 0;

for (let char of frase) {
    if (vogais.includes(char)) {
        contador++;
    }
}

console.log(`A frase "${frase}" tem ${contador} vogais.`);
alert(`Vogais: ${contador}`);
document.write(`"${frase}" tem ${contador} vogais.`);

