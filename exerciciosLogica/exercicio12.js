/* Exercício 12: Maior e Menor em Array
Peça 6 números, encontre e mostre o maior e o menor valor e suas posições. */

// Código do exercício:
let array = [];
for (let i = 0; i < 6; i++){
    let num = parseInt(prompt(`Digite o ${i+1}º número: `))
    array.push(num)
}

let maior  = array[0]
let menor = array[0]
let posMaior = 0
let posMenor = 0

for (let i = 1; i < array.length; i++){
    if(array[i] > maior){
        maior = array[i]
        posMaior = i
    }else{
        if(array[i] < menor){
            menor = array[i]
            posMenor = i
        }
    }
}

console.log(`Array: [${array.join(', ')}]`);
console.log(`Maior: ${maior} (posição ${posMaior})`);
console.log(`Menor: ${menor} (posição ${posMenor})`);
alert(`Maior: ${maior} (pos ${posMaior})\nMenor: ${menor} (pos ${posMenor})`);