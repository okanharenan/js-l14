//MOSTRE TODOS OS PRODUTOS EM CARDs (use componentes do bootstrap)
//https://fakestoreapi.com/docs#tag/Products/operation/getAllProducts

let url = "https://fakestoreapi.com/products"
const listaProduto = document.getElementById("produto")

 async function cardProduto(){
    let resposta =  await fetch(url)
    if(!resposta.ok){
        alert("Produtos não econtrados")
    }
    try{
        let dados = await resposta.json()
        dados.forEach(produtos => {
            listaProduto.innerHTML += `
            <div class="col-md-4 mb-4 produto">

                <div class="card v-100 shadow">

                    <img 
                        src="${produtos.image}" 
                        class="card-img-top p-3"
                        alt="${produtos.title}"
                        style="height:250px; object-fit:contain;"
                    >

                    <div class="card-body d-flex flex-column">

                        <h5 class="card-title">
                            ${produtos.title}
                        </h5>

                        <p class="card-text">
                            ${produtos.description.substring(0, 100)}...
                        </p>

                        <p class="fw-bold text-success">
                            R$ ${produtos.price.toFixed(2)}
                        </p>

                        <p class="text-muted">
                            Categoria: ${produtos.category}
                        </p>

                        <button class="btn btn-primary mt-auto">
                            Comprar
                        </button>

                    </div>

                </div>

            </div>

            `
            
        });

    }catch (erro){
        console.log("Erro:", erro);

        listaProduto.innerHTML = `
            <div class="alert alert-danger">
                Erro ao carregar produtos
            </div>
        `;
}
    

}

cardProduto()