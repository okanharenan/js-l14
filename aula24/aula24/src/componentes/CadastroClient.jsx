
import { useState } from "react";

export default function CadastroFuncionario() {

    // estados dos inputs
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cargo, setCargo] = useState("");

    // estado do funcionário
    const [objFuncionario, setObjFuncionario] = useState({});

    // função do botão
    function cadastrarFuncionario() {
        if(nome === "" || email === "" || cargo === ""){
            alert("Os campos precisa ser preenchidos")
            return
        }else{
            setObjFuncionario({
                nome: nome,
                email: email,
                cargo: cargo
            });
        }
        setNome("")
        setEmail("")
        setCargo("")
    }

    return (
        <div>
            <h1>Cadastro de Funcionário</h1>

            {/* Input Nome */}
            <div>
                <label>Nome:</label>
                <input
                    type="text"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                />
            </div>

            {/* Input Email */}
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>

            {/* Input Cargo */}
            <div>
                <label>Cargo:</label>
                <input
                    type="text"
                    value={cargo}
                    onChange={(event) => setCargo(event.target.value)}
                />
            </div>

            <br />

            {/* Botão */}
            <button onClick={cadastrarFuncionario}>
                Cadastrar Funcionário
            </button>

            <hr />

            {/* Exibição */}
            <h2>Funcionário Cadastrado</h2>

            <p>Nome: {objFuncionario.nome}</p>
            <p>Email: {objFuncionario.email}</p>
            <p>Cargo: {objFuncionario.cargo}</p>
        </div>
    );
}