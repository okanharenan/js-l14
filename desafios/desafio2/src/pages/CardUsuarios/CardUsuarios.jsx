export default function CardUsuarios({id, nome, profissao, imagem, online}){
    return(
        <div className="card">
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
            <p>{profissao}</p>
            <span style={{color: online ? "green": "red"}}>
                {online ? "online": "offline"}
            </span>
        </div>
    )
}