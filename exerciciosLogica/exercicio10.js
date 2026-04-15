/* Exercício 10: Calculadora de Média de Notas
Peça nome e 3 notas de um aluno, calcule média. Classifique: A(90+), B(80-89), C(70-79), D(60-69), F(<60). */

// Código do exercício:
let conceito;
let name = prompt("Digite o nome do aluno: ")
let grades = []

for (let i = 1; i <= 3; i++){
    let grade = parseFloat(prompt(`Nota ${i}° : `))
    grades.push(grade)
}
let média = (grades.some (grade => isNaN(grade))) ? "Notas inválidas" : grades.reduce((acc, grade) => acc + grade, 0) / grades.length

if (média >= 90){
    conceito = "A"
}
else if (média >= 80){
    conceito = "B"
}
else if (média >= 70){
    conceito = "C"
}
else if (média >= 60){
    conceito = "D"
}else{
    conceito = "F"
}

console.log(`${name}: Média ${média.toFixed(2)} - Conceito: ${conceito}`)
alert(`${name}: Média ${média.toFixed(2)} - ${conceito}`)
document.write(`${name}: ${média.toFixed(2)} - ${conceito}`)
