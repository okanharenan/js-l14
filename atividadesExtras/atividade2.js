let array = ["a", "a", "b", "b", "c"]
let contador = {}

for(let item of array){
    if(item in contador){
        contador[item] += 1
    }else{
        contador[item] = 1
    }
}
console.log(contador)
