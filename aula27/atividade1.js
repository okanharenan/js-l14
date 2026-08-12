//faça a conversçao do texto de json para objeto. Depois adicione um cada um dos elementos do array a propriedade tipoUsuario nos objetos. Para todos os usuarios adicione o valor de "padrão" ao atributo tipoUsuario.
//mostre todos os dados dos objetos em uma string formatada no console obedecendo o seguinte formato
//
let pessoas = `
[
    {
        "id": 1,
        "nome": "João",
        "idade": 20,
        "email": "5KXfH@example.com",
        "senha": "123456"
    },
    {
        "id": 2,
        "nome": "Maria",
        "idade": 25,
        "email": "Hs5tC@example.com",
        "senha": "123456"
    },
    {
        "id": 3,
        "nome": "Pedro",
        "idade": 30,
        "email": "KU0YK@example.com",
        "senha": "123456"

    }
]`;

let pessoasObj = JSON.parse(pessoas);

pessoasObj.forEach((pessoa) => {
  pessoa.tipoUsuario = "padrão";
  console.log(
    `ID: ${pessoa.id},
     Nome: ${pessoa.nome}, 
     Idade: ${pessoa.idade}, 
     Email: ${pessoa.email},  
     Tipo de Usuário: ${pessoa.tipoUsuario}`,
  );
});
