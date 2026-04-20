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


for(let propriedade in alunos){
    if(propriedade === "1"){
        console.log(`Aluno 2`, alunos[propriedade])
    }
    if(propriedade === "3"){
        console.log(`Aluno 3:`, alunos[propriedade])
    }
}