//no Hospital Casa do Cleitinho, temos duas filas de espera uma fila normal e outra prioritária.
let filaNormal = [ 'Ana', 'João', 'Maria', 'Pedro', 'Joana', 'Paulo' ]
let filaPrioritaria = ['Antonio', 'Isaias', 'Adalgisa', 'Adalberto']
let atendidos = []

//Para o atendimento serão liberadas 4 senhas. A ordem de atendimento será sempre 1 prioritária, 1 normal até que as senhas sejam esgotadas.
//Cada paciente atendido ( que saiu da fila de atendimento) deverá ser removido da fila e adicionado ao final da fila de Atendidos. 

//métodos para remoção: shift (inicio) e pop (final), sempre retornam o item removido
//métodos para adição: push(final) e unshift(inicio)

for (let i = 0; i < 4; i++){
    let pacientePrioritario = filaPrioritaria.shift()
    let pacienteNormal = filaNormal.shift()
    if(pacientePrioritario){
        atendidos.push(pacientePrioritario)
    }
    if(pacienteNormal){
        atendidos.push(pacienteNormal)
    }
    
}

console.log("Fila Prioritária: ", filaPrioritaria);
console.log("Fila Normal: ", filaNormal);
console.log("Atendidos: ", atendidos);