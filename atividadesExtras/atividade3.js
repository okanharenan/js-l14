let regras = {
    3 : "Fizz",
    5 : "Buzz",
    7 : "Bazz"
}

let resultado = Array.from({length : 100}, (_, i) => i +1).reduce((acc, num) => {
    let texto = Object.entries(regras).reduce((str, [div, palavra]) =>{
        return num % div === 0 ? str + palavra: str;
    }, "")

    acc.push(texto || num);

    return acc;

}, []);

console.log(resultado);