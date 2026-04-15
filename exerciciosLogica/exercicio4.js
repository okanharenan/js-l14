/*
let array = []
let maiorNumero = 0
for (let i = 0; i < 5; i++){
    let numero = parseInt(prompt(`Didite o ${i+1}° numero: `))
    array.push(numero)
    //maiorNumero = Math.max(...array)

    if(numero > maiorNumero){
        maiorNumero = numero
    }
    
    
}

console.log(`O maior numero é: ${maiorNumero}`)

*/

/*let array = ["1", "2", "3", "4", "5" , "5"]

if (array.length > 0 ){
    let removeDuplicados = [...new Set(array)]
    console.log(`Array sem duplicados: ${removeDuplicados}`)
    console.log(`Array original: ${array}`)
}*/

let array = ["1", "2", "3", "4", "5" , "5"]
let arraySeDuplicados = []

for (let i = 0; i < array.length; i++){
    let atual = array[i]
    let existe = false
    for( let j = 0; j < arraySeDuplicados.length; j++){
        if (arraySeDuplicados[j] === atual ){
            existe = true
            break

        }
    }
    if(!existe){
        arraySeDuplicados.push(atual)
    }
}

console.log(`Array sem duplicados: ${arraySeDuplicados}`)
console.log(`Array original: ${array}`)

let semDuplicado = array.filter((item, index) =>
array.indexOf(item) === index)

alert(`Array sem duplicados: ${semDuplicado}`)
alert(`Array original: ${array}`)