/*1. 🔢 Números Pares e Ímpares

Crie um programa que:

Receba um número N
Mostre quantos números pares e ímpares existem de 1 até N */

function contarParesImpares(n){
    let pares = 0
    let impares = 0 

    for(let i=1; i <= n; i++){
        if(i % 2 === 0){
            pares++
        } else {
            impares++

        }

    }
    console.log(`quantidade de números pares de 1 à ${n}: ${pares}`)
    console.log(`quantidade de números ímpares de 1 à ${n}: ${impares}`)
}

let numero = parseInt(prompt("Digite um número: "))
contarParesImpares(numero)