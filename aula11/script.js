/*Leia três notas, calcule sua média e a exiba para o usuário
Leia o salário de um funcionário e exiba o novo salário deste funcionário com um aumento de 20% */

let nota1 = prompt("Digite a primeira nota: ")
let nota2 = prompt("Digite a segunda nota: ")
let nota3 = prompt("Digite a terceira nota: ")

let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3

alert("A média do aluno é: " + media)

let salario = prompt("Digite o salário do funcionário: ")
let novoSalario = parseFloat(salario) * 1.2

alert("O novo salário do funcionário é: " + novoSalario)