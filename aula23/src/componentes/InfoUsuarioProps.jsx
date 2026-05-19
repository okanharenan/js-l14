export default function InfoUsuarioProps({nome, idade, profissao, email}){
    return(
        <div>
            <h2>Informações do usuáiros</h2>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
            <p>Email: {email}</p>
            <hr />
        </div>
    )
}