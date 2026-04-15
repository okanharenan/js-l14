/* Exercício 5: Calcular Fatorial
Peça um número inteiro positivo ao usuário e calcule o fatorial dele (ex: 5! = 5*4*3*2*1 = 120).
Use um laço for ou while. Mostre o resultado no console e em alert. */

// Código do exercício:
let numero = parseInt(prompt("Digite um número positivo para calcular o fatorial: "));

if (numero < 0) {
    alert("Por favor, digite um número positivo.");
} else {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${numero} é: ${fatorial}`);
    alert(`Fatorial de ${numero}! = ${fatorial}`);
    document.write(`Fatorial de ${numero}! = ${fatorial}`);
}

