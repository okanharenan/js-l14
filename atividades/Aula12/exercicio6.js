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


/*🧩 5. Contar frequência de elementos

Conte quantas vezes cada item aparece no array.

👉 [1,2,2,3] → {1:1, 2:2, 3:1}*/


let nuns = [1,2,2,3,4,4,5,5,6]

let contaFrequecia = nuns.reduce((acc, numero) =>{
    if(acc[numero]){
        acc[numero] ++
    }else{
        acc[numero] = 1
    }

    return acc
}, {})

console.log(contaFrequecia)

/*🧩 10. Anagrama

Verifique se duas palavras são anagramas (mesmas letras em ordem diferente).

👉 "amor" e "roma" → true */

let palavra1 = "amor"
let palavra2 = "roma"
function eAnagrama(p1, p2){
    if(p1.length !== p2.length) return false

    let contador = {}

    for(let letra of p1){
        contador[letra] = (contador[letra] || 0) +1
    }
    for (let letra of p2){
        if(!contador[letra]) return false
        contador[letra] -- 
    }
    return true
}

console.log(`A palavra ${palavra1} e a ${palavra2} são anagramas? ${eAnagrama(palavra1,palavra2)}`)

let lista = ["amor", "roma", "carro", "orcar", "mesa", "soma"]

function agruparAnagramas(lista){
    let mapa ={}
    
    for(let palavra of lista){
        let contador = {}
        for(let letra of palavra){

            contador[letra] = (contador[letra] || 0) + 1
        }

        let chave = Object.keys(contador)
        .sort()
        .map( letra => letra + contador[letra])
        .join('')

        if(!mapa[chave]){
            mapa[chave] = []
        }
        mapa[chave].push(palavra)

            
  
    }
    return Object.values(mapa)
}

console.log(agruparAnagramas(lista))


let = numeros = [1, 2, 3, 3, 4, 4, 5, 5]

let repetido = numeros.reduce((acc, valor) =>{
    if(acc.encontrar){
        return acc
    }
    if(acc.visto[valor]){
        acc.encontrar = valor
    }
    else{
        acc.visto[valor] = true
    }

    visto = {}
    encontrar = null
})

console.log(repetido.encontr)