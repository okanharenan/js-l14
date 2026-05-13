// CRIE UMA PÁGINA DE COTAÇÃO DE MOEDAS 
//https://brasilapi.com.br/docs#tag/CAMBIO/paths/~1cambio~1v1~1moedas/get
//Usando a api acima faça uma requisição e mostre a conversão do valor inserido pelo usuário em real para dolar, euro e libra esterlina.
 

//MOSTRE TODOS OS PRODUTOS EM CARDs (use componentes do bootstrap)
//https://fakestoreapi.com/docs#tag/Products/operation/getAllProducts

let valor = document.getElementById("valor");
let btnCotar = document.getElementById("btnCotar");

const dolar = document.getElementById("dolar")
const euro = document.getElementById("euro")
const libra = document.getElementById("libra")

btnCotar.addEventListener('click', async () => {
    let valorReal = Number(valor.value)
    if(valorReal <= 0 || isNaN(valorReal)){
        alert("Digite um valor válido")
        return 
    }

    try{
        let resposta = await fetch("https://api.exchangerate-api.com/v4/latest/BRL")
        let dados = await resposta.json()

        let moedaDolar = dados.rates.USD
        let moedaEuro = dados.rates.EUR
        let moedaLibra = dados.rates.GBP


        let valorDolar = valorReal * moedaDolar
        let valorEuro = valorReal * moedaEuro
        let valorLibra = valorReal * moedaLibra

        dolar.innerHTML = `$ ${valorDolar.toFixed(2)}`
        euro.innerHTML = `€ ${valorEuro.toFixed(2)}`
        libra.innerHTML = `£ ${valorLibra.toFixed(2)}`    
    }catch (error){
        alert("Erro ao buscar cotação")
        console.log(error)

    }
} )

