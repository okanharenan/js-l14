//mostre as informações no console no seguinte formato
//substitua os itens mostrando as informações armazenadas no array
//nome: itemLista1
//idade: itemLista2
//cargo: itemLista3
//email: itemLista4
//senha: itemLista5

let campos = ["nome", "idade", "cargo", "email", "senha"];
let array = [];

for (let i = 0; i < campos.length; i++) {
    let item = prompt(`Digite o ${campos[i]}: `);
    array.push(item);
}

for (let i = 0; i < campos.length; i++) {
    console.log(`${campos[i]}: ${array[i]}`);
}