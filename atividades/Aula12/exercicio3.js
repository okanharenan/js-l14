//no Hospital Casa do Cleitinho, temos duas filas de espera uma fila normal e outra prioritária.
let filaNormal = [ 'Ana', 'João', 'Maria', 'Pedro', 'Joana', 'Paulo' ]
let filaPrioritaria = ['Antonio', 'Isaias', 'Adalgisa', 'Adalberto']
let atendidos = []

for (let i = 1; i <= 4; i++){
    let pacientePrioritario
    let pacienteNormal 
    if( i % 2 ===1){
        pacientePrioritario = filaPrioritaria.shift()
        atendidos.push(pacientePrioritario)
    }
    if(i % 2 === 0){
        pacienteNormal = filaNormal.shift()
        atendidos.push(pacienteNormal)
    }
    
}

console.log("Fila Prioritária: ", filaPrioritaria);
console.log("Fila Normal: ", filaNormal);
console.log("Atendidos: ", atendidos);