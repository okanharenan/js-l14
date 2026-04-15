/* Exercício 7: Verificar Número Primo
Peça um número ao usuário e verifique se é primo (divisível apenas por 1 e ele mesmo).
Use laço para testar divisores. Mostre resultado. */

// Código do exercício:
let numero = parseInt(prompt("Digite um número para verificar se é primo: "));

if(numero <=1){
    alert(`O número ${numero} não é primo!`)

}else if(numero % 2 === 0){
    alert(`O número ${numero} não é primo!`)
}else{
    let ehPrimo = true
    for (let i = 2; i <= Math.sqrt(numero); i++){
        if (numero % i === 0 ){
            ehPrimo = false
            break
        }
    }
    if (ehPrimo) {
        alert(`O número ${numero} é primo!`)
    } else {
        alert(`O número ${numero} não é primo!`)
    }
   
}

