let nuns = [1,2,3,4,5,5,7,7];
let maior = 0
//let numeros = [... new Set(nuns)]

let numeros = nuns.filter((item, index) =>{
    return nuns.indexOf(item) === index;
})


for (let i = 0; i < numeros.length; i++){
    if(numeros[i] > maior){
        maior = numeros[i]
    }
}
console.log(numeros)
console.log(`O maior número do array é o: ${maior}`)