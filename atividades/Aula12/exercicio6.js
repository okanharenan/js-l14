5/*🧩 7. Soma de números pares

Some apenas os números pares de um array. */

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
soma = num.reduce((acc, valor) =>{
    if (valor % 2 === 0){
        return acc + valor
    }
    return acc
},0)


console.log(`A soma de todos os número pares é: ${soma}`)


/*🧩 3. Remover duplicados de um array

Dado um array, retorne apenas valores únicos. */

// removendo duplicados mais manual/ próximo passo, usar reduce!
let duplicados = [1,2,3,4,4,5,6,6]

let semDuplicados = []

for(let item = 0; item < duplicados.length; item++){
    let num = duplicados[item]

    if(!semDuplicados.includes(num)){
        semDuplicados.push(num)
    }
}

console.log(semDuplicados)