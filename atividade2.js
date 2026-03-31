//leia 2 números do usuário. Faça a conversão com a função mais adequada e realize as operações abaixo:
// some o número 1 com o número 2 e 10
// subtraia o numero 2 do numero 1
// multiplique o número 1 por 50
// divida 600 pelo número 2

//mostre no terminal todas as operações realizadas no seguinte formato: 
// "A soma do número 1 com o número 2 e 10 é: resultado"

let number1 = prompt("Digite o primeiro número: ")
let number2 = prompt("Digite o segundo número: ")

let sum= Number(number1) + Number(number2) + 10
let sub = Number(number1) - Number(number2)
let mult = Number(number1) * 50
let div = 600 / Number(number2)

console.log(`A soma do número 1 com o número 2 + 10 é: ${sum} \n 
    A subtração do número 1 com o número 2 é: ${sub} \n 
    A multiplicação do número 1 por 50 é: ${mult} \n
     A divisão de 600 pelo número 2 é: ${div}`)


/*console.log(`A subtração do número 1 com o número 2 é: ${sub}`)
console.log(`A multiplicação do número 1 por 50 é: ${mult}`)
console.log(`A divisão de 600 pelo número 2 é: ${div}`)*/