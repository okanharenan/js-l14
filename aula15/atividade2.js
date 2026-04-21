let alunos = [
    {
        nome: 'João',
        idade: 20,
        sexo: 'M',
        media : 10
    },
    {
        nome: 'Maria',
        idade: 20,
        sexo: 'F',
        media : 9
    },
    {
        nome: 'Pedro',
        idade: 20,
        sexo: 'M',
        media : 10
    },
    {
        nome: 'Ana',
        idade: 20,
        sexo: 'F',
        media : 10
    },
    {
        nome: 'Joana',
        idade: 20,
        sexo: 'F',
        media : 9
    }
]


for(let x in alunos){
    if(x == 1 || x == 3){
        console.log(`${x}`, alunos[x])
    }
}