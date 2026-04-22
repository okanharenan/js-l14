//crie 4 funções para as operações matemáticas básicas: soma, subtração, multiplicação e divisão. Cada função deve receber dois parâmetros e mostrar o resultado da operação no console. Importante, não existe divisão por zero, então a função de divisão deve verificar se o segundo parâmetro é diferente de zero antes de realizar a operação. Caso contrário, deve mostrar uma mensagem de erro no console.

//após criar as funções teste cada uma delas, passando valores diferentes para os parâmetros, incluindo casos de divisão por zero para verificar se a mensagem dexibie erro é da corretamente.

function soma(a, b){
    console.log(`A soma de a + b é: ${a + b}`)
}

function subtracao(a, b){
    console.log(`A subtração de a - b é: ${a - b}`)
}

function multiplicacao(a, b){
    console.log(`A multiplicação de a x b é: ${a * b}`)
}

function divisao(a, b){
    if(b === 0){
        console.log("Erro: divisão por zero não é permitida")
    } else {
        console.log(`A divisão de a + b é: ${a / b}`)
    }
}

soma(10,2)
subtracao(10,3)
multiplicacao(10,3)
divisao(10,2)