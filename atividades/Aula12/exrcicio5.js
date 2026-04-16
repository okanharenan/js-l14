//o cleitinho quer comprar um sapato ( ele tem 4 patas) então precisa saber se tem o seu número. Ele usa n 6 e quer verificar se o tênis que ele quer tem essa númeração disponível

let sapato= ['adikas', 'branco', [12,13,14,25,32,8,10,43,52,5]]


let sapato = ['adikas', 'branco', [12, 13, 14, 25, 32, 8, 10, 43, 52, 5]];

let numeroCleitinho = 6;

if (sapato[2].includes(numeroCleitinho)) {
    let indice = sapato[2].indexOf(numeroCleitinho);

    sapato[2].splice(indice, 1);

    console.log('Sapatinhos reservados.');
    console.log('Estoque atualizado:', sapato[2]);

} else {
    console.log('Não temos esse sapato na loja.');
}