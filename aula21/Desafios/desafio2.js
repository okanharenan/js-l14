//faça uma validação de CNPJ: https://brasilapi.com.br/docs#tag/CNPJ
//consuma a api e mostre as informações do CNPJ inserido pelo usuário. Em caso de erro ou cnpj invalido, mostre uma mensagem de erro. Valide ser foram inseridos a quantidade de digitos corretos.

const inputCnpj = document.querySelector("#cnpj")
const botao = document.querySelector("#buscar")
const erro = document.querySelector("#erro")
const resultado = document.querySelector("#resultado")

inputCnpj.addEventListener('input', () =>{
    let valor = inputCnpj.value

    valor = valor.replace(/\D/g, '')

    valor = valor.replace(/^(\d{2})(\d)/, "$1.$2")
    valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2")
    valor = valor.replace(/(\d{4})(\d)/, "$1-$2")

    inputCnpj.value = valor
})

botao.addEventListener('click', async () =>{
    erro.style.display = 'none'
    resultado.style.display = 'none'

    let cnpj = inputCnpj.value.replace(/\D/g, '')

    //validade quantidade de dígitos
    if(cnpj.length !== 14){
        erro.style.display = 'block'
        erro.innerText = "CNPJ inválido, Digite 14 números" 
        return 
    }

    try{

        let resposta = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
        if(!resposta.ok){
            throw new Error("CNPJ não encontrado")
        }
        let dados = await resposta.json()

        resultado.style.display = 'block'
        document.getElementById('razao').innerText = dados.razao_social || 'Não informado'
        document.getElementById('fantasia').innerText = dados.nome_fantasia || 'Não informado'
        document.getElementById('situacao').innerText = dados.descricao_situacao_cadastral || 'Não informado'
        document.getElementById('email').innerText = dados.email || 'Não informado'
        document.getElementById('telefone').innerHTML = dados.ddd_telefone_1 || 'Não informado'
        document.getElementById('cidade').innerText = dados.municipio || 'Não informado'
        document.getElementById('uf').innerText = dados.uf || 'Não informado'
        document.getElementById('cep'). innerHTML = dados.cep || 'Não informado'

    }catch (e){
        erro.style.display = 'block'
        erro.innerHTML = 'Erro ao buscar o CNPJ ou CNPJ inválido'
    }


})