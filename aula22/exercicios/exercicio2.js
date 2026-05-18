// pegando elementos
const formulario = document.querySelector("#formulario")

const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirmPassword")

// evento de submit
formulario.addEventListener("submit", async (event) => {

    // evita recarregar a página
    event.preventDefault()

    // validação das senhas
    if(password.value !== confirmPassword.value){

        alert("Senhas diferentes")
        return
    }

    // objeto do usuário
    const novoUsuario = {
        username: username.value,
        email: email.value,
        password: password.value
    }

    try{

        // requisição POST
        const resposta = await fetch("https://fakestoreapi.com/users", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(novoUsuario)
        })

        // verificando erro
        if(!resposta.ok){
            throw new Error("Erro ao criar usuário")
        }

        // convertendo resposta
        const dados = await resposta.json()

        console.log(dados)

        // mensagem de sucesso
        alert("Usuário criado com sucesso")

        // limpando formulário
        formulario.reset()

    }catch(erro){

        console.error(erro)

        alert("Erro ao criar usuário")
    }

})