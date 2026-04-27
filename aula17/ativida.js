function mostroOresultado(numero,funcaoDeCallback){ 
    let resultado = funcaoDeCallback(numero);
    console.log(resultado);
}

let funcaoDeCallback = ((a) =>{
    if (a < 0){
        return `${a} - número negativo`
    }else if( a % 2 === 0){
        let Multi = a * a
        return `O numero ${a} é par e a multipliação dele mesmo é ${Multi}`
    }else{
        return ` O número ${a} é ímpar!`
    }
})

mostroOresultado(4, funcaoDeCallback)
mostroOresultado(3, funcaoDeCallback)
