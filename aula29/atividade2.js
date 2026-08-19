//atividade2
//crie um classe Biblioteca que tenha os seguintes atributos:
//livros (array de livros) INICIALMENTE VAZIO
//quantidade de livros (valor padrão 0)
//crie um metodo para "adicionar livro", esse metodo deverá adicionar um livro ao array de livros. Importante, esse livro deve ser uma instancia da classe Livro.
//crie um metodo para "remover livro", esse metodo deverá remover um livro do array de livros irá receber o nome do livro como parametro e deverá remover o livro do array de livros
//dica: use o metodo filter para remover o livro
//crie um metodo para "listar livros", esse metodo deverá listar todos os livros do array de livros

class Livro{
    constructor(titulo){
        this.titulo = titulo;
    }
}

class Biblioteca {
    constructor(
        livros = [],
        quantidadeDeLivros = 0,
    ){
        this.livros = livros;
        this.quantidadeDeLivros = livros.length;
    }

    adicionarLivro(livro){
        if(livro instanceof Livro){
            this.livros.push(livro);
            this.quantidadeDeLivros = this.livros.length;
            return console.log(`Livro ${livro.titulo} adicionado com sucesso!`);
        }else{
            console.log("O objeto passado não é uma instância da classe Livro.");
        }
    }

    removerLivro(nomeDoLivro){
        this.livros = this.livros.filter(livro => livro.titulo !== nomeDoLivro);
        this.quantidadeDeLivros = this.livros.length;
    }

    listarLivros(){
        this.livros.forEach(livro =>{
            console.log(livro);
        })
    }
}

let biblioteca = new Biblioteca();

let livro1 = new Livro("Dom Casmurro");
let livro2 = new Livro("O Cortiço");

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);

biblioteca.listarLivros();

biblioteca.removerLivro("Dom Casmurro");

biblioteca.listarLivros();