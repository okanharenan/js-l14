/*Leia dois números e informe o maior deles. */

const num1 = parseFloat(prompt("Digite o primeiro número: "))
const num2 = parseFloat(prompt("Digite o segundo número: "))

if (num1 > num2) {
    alert("O maior número é: " + num1)
} else {
    alert("O maior número é: " + num2)
}