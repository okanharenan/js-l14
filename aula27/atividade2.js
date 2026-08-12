

const funcionarios = [
    {id: 1,
        nome: "João",
        projeto:[]
    },
    {id: 2,
        nome: "Maria",
        projeto: ["Projeto A", "Projeto B"]
    },
    {id: 3,
        nome: "Pedro",
        projeto: []
    },
    {id: 4,
        nome: "Ana",
        projeto: ["Projeto C"]
    },
    {id: 5,
        nome: "Cleitinho",
        projeto: ["Projeto D", "Projeto E"]
    },
    
]

function funcionarioSemProjeto(funcionarios) {
    return funcionarios.filter(funcionario => funcionario.projeto.length === 0);
}

function organizarprojetos(funcionarios){
    const projetospendentes = [];
    funcionarios.forEach(funcionario =>{
        while(funcionario.projeto.length > 1){
            projetospendentes.push(funcionario.projeto.pop());
        }
    })
    return {
        funcionarios, 
        projetospendentes
    }
}

const resultados = organizarprojetos(funcionarios);
console.log("Funcionários sem projeto:", funcionarioSemProjeto(resultados.funcionarios));
console.log("Projetos pendentes:", resultados.projetospendentes);

function redistribuirProjetos(funcionarios, projetospendentes) {
    funcionarios.forEach(funcionario => {
        if(funcionario.projeto.length === 0 && projetospendentes.length > 0) {
            const projeto = projetospendentes.pop();
            funcionario.projeto.push(projeto);
        }
    })
    return funcionarios;
}

redistribuirProjetos(
    resultados.funcionarios,
    resultados.projetospendentes,
);

console.log(resultados.funcionarios);