
//peça as seguintes informações ao usuário: nome, idade, cidade, email e profissão. Depois, exiba uma mensagem no console no seguinte formato:

/* nome : nomeDoUsuario
idade : idadeDoUsuario
cidade : cidadeDoUsuario
email : emailDoUsuario
profissão : profissaoDoUsuario 

Oi eu sou nomeDoUsuario, tenho idadeDoUsuario anos, moro em cidadeDoUsuario, meu contato é emailDoUsuario e minha profissão é profissaoDoUsuario.

*/

//DICA: para ler as informações do usuário, utilize a função prompt() e para exibir a mensagem no console, utilize a função console.log().

const name = prompt("Digite seu nome: ")
const age = prompt("Digite sua idade: ")
const city = prompt("Digite sua cidade: ")
const email = prompt("Digite seu email: ")
const work = prompt("Digite sua profissão: ")



console.log(`Olá, ${name}! Você tem ${age} anos, mora em ${city}, seu email é ${email} e sua profissão é ${work}.`)