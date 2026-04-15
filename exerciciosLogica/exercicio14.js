/* Exercício 14: Jogo de Adivinhação
Pense em um número secreto (escolha fixo, ex:7). Peça tentativas até acertar (max 5), diga maior/menor. */

// Código do exercício:
let numeroSecreto = 7;
let tentativas = 0;
let chute;

while (tentativas < 5) {
    chute = parseInt(prompt(`Tentativa ${tentativas+1}/5: Digite um número de 1 a 10.`));
    tentativas++;
    if (chute === numeroSecreto) {
        alert(`Parabéns! Acertou em ${tentativas} tentativas!`);
        console.log(`Acertou ${numeroSecreto} em ${tentativas} tentativas.`);
        document.write(`Acertou em ${tentativas} tentativas!`);
        break;
    } else if (tentativas === 5) {
        alert(`Perdeu! O número era ${numeroSecreto}.`);
        console.log(`Número secreto: ${numeroSecreto}`);
    } else {
        let dica = chute < numeroSecreto ? 'maior' : 'menor';
        alert(`Errado! Tente um número ${dica}.`);
    }
}

