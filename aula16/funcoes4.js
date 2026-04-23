//você tem uma demanda para criar 3 funções: 
//1 função de cálculo de média : essa função recebe um objeto e para o atrbuto notas ( que é um array) calcula a média e retorna o valor da média 
//  calcularMedia(aluno) 

//2 função de cálculo de faltas : essa função recebe um objeto e para o atributo faltas (que é um array) calcula a quantidade de faltas e retorna o valor da quantidade de faltas
// calcularFaltas(aluno)

// a terceira função é a função que irá receber um objeto aluno, irá passar esse objeto como parâmetro para o segundo parametro que é a função de callback. Essa função de callback irá mostrar todos os dados do aluno recebido como parâmetro mais o valor retornado pela função de callback passada como segundo parâmetro.
// mostrarDados(aluno, callback)

function calculaMedia(aluno){
    let soma  = aluno.notas.reduce((acc, nota) => acc + nota, 0)
    return soma / aluno.notas.length
}

function calculaFalta(aluno){
    return aluno.faltas.reduce((acc, falta) => acc + falta, 0)
}

function mostraDados(aluno, resultado){
    let dados = resultado(aluno)
    console.log(`Aluno: ${aluno.nome}`)
    console.log(`Notas: ${aluno.notas}`)
    console.log(`Faltas: ${aluno.faltas}`)
    console.log(`Resultado: ${dados}`)
    console.log('----------------------')
}


let alunos = [
    {
        nome: 'Cleitinho',
        notas: [10, 9, 8],
        faltas: [1, 0, 2]
    },
    {
        nome: 'Sandoval',
        notas: [7, 6, 5],
        faltas: [0, 1, 0]
    }
]
//execute as funções para o cleitinho (aluno[0]) e para o sandoval (aluno[1])

mostraDados(alunos[0], calculaMedia)
mostraDados(alunos[0], calculaFalta)

mostraDados(alunos[1], calculaMedia)
mostraDados(alunos[1], calculaFalta)