/* Exercício 6: Sequência de Fibonacci
Peça um número N ao usuário e mostre os N primeiros termos da sequência de Fibonacci (0, 1, 1, 2, 3, 5, ...).
Use laço e variáveis para calcular. Mostre no console. */

// Código do exercício:
let n = parseInt(prompt("Digite quantos termos da sequência de Fibonacci deseja ver: "));

let fib = [0, 1];

if (n <= 0){
    alert("Digite um número positivo.")
}else{
    for(let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2]

    }
    console.log(`Os ${n} primeiros termos de Fibonacci são: ${fib.slice(0, n).join(', ')}`)
    alert(`Fibonacci (${n} termos): ${fib.slice(0, n).join(', ')}`)
}

