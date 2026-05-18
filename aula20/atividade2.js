const estado = document.getElementById("estado")
const acesa = document.getElementById("acesa")
const apagada = document.getElementById("apagada")
const quebrada = document.getElementById("quebrada")
const trocar = document.getElementById("trocarLampada")
const erro = document.getElementById("erro")
let estadoQuebrada = false

const container = document.querySelector(".container") 

function atualizarBackground(estadoAtual) {
    if (estadoAtual === "apagada" || estadoAtual === "quebrada") {
        container.style.backgroundColor = "black"

    } else {
        container.style.backgroundColor = ""  
    }
}

function mostrarErro(){
    erro.textContent = "⚠ A lampada está quebrada, é necessário a troca"
}

function limparErro(){
    erro.textContent = ""
}



function estadoLampada(){
    acesa.addEventListener("click", () =>{
    if(estadoQuebrada){
        mostrarErro()
    }else{
        estado.src ="/aula20/imagens/acesa.png"
        estado.alt = "Acesa"
        atualizarBackground("acesa")
    }
    })

    apagada.addEventListener("click", () =>{
        if(estadoQuebrada){
            mostrarErro()
        }else{
            estado.src = "/aula20/imagens/apagada.png"
            estado.alt = "Apagada"
            atualizarBackground("apagada")
        }
        
    })

    quebrada.addEventListener("click", () =>{
        estadoQuebrada = true
        limparErro()
        estado.src = "/aula20/imagens/quebrada.png"
        estado.alt = "Quebrada"
        atualizarBackground("quebrada")
    })

    trocar.addEventListener("click", () =>{
        estadoQuebrada = false  // ← estava true, nunca "descobrava" a lâmpada
        limparErro()
        estado.src = "/aula20/imagens/apagada.png"
        estado.alt = "Apagada"
        atualizarBackground("quebrada")
        setTimeout(() =>{
            estado.src = "/aula20/imagens/acesa.png"
            estado.alt = "Acesa"
            atualizarBackground("acesa")
        }, 1000)
    })


}
estadoLampada()
