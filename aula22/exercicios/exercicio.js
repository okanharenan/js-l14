//usando uma função async com await, incluindo tratamento de erro com try/catch faça a chamada a api 'https://fakestoreapi.com/users' e mostre o total de usuários cadastratos na tela. Crie uma lista com o nome e sobrenome de cada usuário. Ex:

/*
<div>
    <h1>Usuários cadastrados: 5</h1>

    <ul>
        <li>Nome 1 Sobrenome 1</li>
        <li>Nome 2 Sobrenome 2</li>
        <li>Nome 3 Sobrenome 3</li>
        <li>Nome 4 Sobrenome 4</li>
        <li>Nome 5 Sobrenome 5</li>
        ...
    </ul>
</div>
*/

//DICAS: 
//getElementById OU querySelector, createElement, innerHTML, appendChild
//fetch, await DENTRO DE UMA FUNÇÃO ASYNC
//try/catch PARA TRATAR ERROS

let app = document.getElementById("app");

async function buscarUsuario(){

    try{
        let resposta = await fetch('https://fakestoreapi.com/users')

        if(!resposta.ok){
            throw new Error("Erro ao buscar usuários")

        }
        let dados = await resposta.json()


        const totalUsuarios =  dados.length

        const div = document.createElement('div')
        const titulo = document.createElement('h1')
        const lista = document.createElement('ul')
        const total = document.createElement('h2')

        titulo.innerHTML = "Lista de Usuários"

        dados.forEach(element => {
            const item = document.createElement('li')
            item.innerHTML += `
               ${element.name.firstname}
               ${element.name.lastname}
            `

            lista.appendChild(item)
            
        });

        total.innerText = `Total de usuários: ${totalUsuarios}`

        div.appendChild(titulo)
        div.appendChild(lista)
        div.appendChild(total)

        app.appendChild(div)


    }catch (e){
        console.error(e)
        app.innerHTML = `<p>Erro ao carregar usuários</p>`

    }
}

buscarUsuario()