//ATIVIDADE 1 

//crie uma classe livro que terá os seguintes atributos:
//titulo, autor, ano_publicacao, disponibilidade (valor padrão true), preco (valor padrão 0)
//crie um metodo para "emprestar o livro", esse método deve verificar se o livro está disponível, se estiver disponível, ele deve mudar o atributo disponibilidade para false e retornar a string "Livro emprestado", se não estiver disponível, deverá retornar a string "Livro indisponível"
//crie um metodo para "devolver o livro", esse método deverá mudar o atributo disponibilidade para true e retornar a string "Livro devolvido"
//crie um método de "exibir detalhes do livro", esse método deverá retornar uma string com os detalhes do livro no seguinte formato: "O livro X do autor Y foi publicado em Z ,custa W reais e está disponível para emprestimo."

//crie 3 instancias da classe livro e exiba os detalhes de cada um deles

class Livro {
    constructor(titulo, autor, ano_publicacao, preco = 0, disponibilidade = true) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano_publicacao = ano_publicacao;
        this.disponibilidade = disponibilidade;
        this.preco = preco;
    }

    emprestarLivro() {
        if (this.disponibilidade) {
            this.disponibilidade = false;
            return "Livro emprestado";
        } else {
            return "Livro indisponível";
        }
    }

    devolverLivro() {
        this.disponibilidade = true;
        return "Livro devolvido";
    }

    exibirDetalhes() {
        let status = this.disponibilidade ? "disponível" : "indisponível";

        return `O livro ${this.titulo} do autor ${this.autor} foi publicado em ${this.ano_publicacao}, custa ${this.preco} reais e está ${status} para empréstimo.`;
    }
}


// Criando 3 instâncias da classe Livro
const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899, 35.90);
const livro2 = new Livro("O Hobbit", "J.R.R. Tolkien", 1937, 45.50);
const livro3 = new Livro("1984", "George Orwell", 1949, 39.90);


// Exibindo os detalhes dos livros
console.log(livro1.exibirDetalhes());
console.log(livro2.exibirDetalhes());
console.log(livro3.exibirDetalhes());


// Testando o empréstimo
console.log(livro1.emprestarLivro());
console.log(livro1.emprestarLivro());

// Testando a devolução
console.log(livro1.devolverLivro());