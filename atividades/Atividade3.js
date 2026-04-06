let num = Number(prompt("Digite um número positivo: "))
let contador = 1
let somaPar = 0
let somaImpar = 0
while (contador <= num){
    if (contador % 2 === 0){
        
        somaPar += contador
    }else{
        somaImpar += contador
    }
  
    contador++

}

console.log(`A soma dos números pares é: ${somaPar}`)
console.log(`A soma dos números ímpares é: ${somaImpar}`)