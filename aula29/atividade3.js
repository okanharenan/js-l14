//para praticar os conceitos de encapsulamento faça a classe ContaBancaria
/*Atributos:
titular
saldo
numero
agencia

//o saldo será um atributo privado

//metodos:
depositar -> necessário fazer as verificações do valor do depósito
sacar -> necessário fazer as verificações de saldo e do valor do saque
exibirInformacoes* -> exibe as informações da conta, como titular, saldo, numero e agencia */

class ContaBancaria {

    #saldo;

    constructor(titular, saldo, numero, agencia) {
        this.titular = titular;
        this.#saldo = saldo;
        this.numero = numero;
        this.agencia = agencia;
    }

    depositar(valor) {

        if (valor <= 0) {
            console.log("O valor do depósito deve ser maior que zero.");
            return;
        }

        this.#saldo += valor;

        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
    }

    sacar(valor) {

        if (valor <= 0) {
            console.log("O valor do saque deve ser maior que zero.");
            return;
        }

        if (valor > this.#saldo) {
            console.log("Saldo insuficiente.");
            return;
        }

        this.#saldo -= valor;

        console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
    }

    exibirInformacoes() {

        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
        console.log(`Agência: ${this.agencia}`);
        console.log(`Saldo: R$ ${this.#saldo.toFixed(2)}`);

    }

}