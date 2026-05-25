import { useState } from "react";

export default function Tabuada() {

    const [numero, setNumero] = useState(2);

    // array para guardar a tabuada
    let tabuada = [];

    // FOR
    for (let i = 1; i <= 9; i++) {
        tabuada.push(
            <p key={i}>
                {numero} x {i} = {numero * i}
            </p>
        );
    }

    return (
        <div>
            <h1>Tabuada</h1>

            {/* Botões */}
            <div>
                <button onClick={() => setNumero(1)}>1</button>
                <button onClick={() => setNumero(2)}>2</button>
                <button onClick={() => setNumero(3)}>3</button>
                <button onClick={() => setNumero(4)}>4</button>
                <button onClick={() => setNumero(5)}>5</button>
                <button onClick={() => setNumero(6)}>6</button>
                <button onClick={() => setNumero(7)}>7</button>
                <button onClick={() => setNumero(8)}>8</button>
                <button onClick={() => setNumero(9)}>9</button>
            </div>

            <hr />

            <h2>Tabuada do {numero}</h2>

            {/* Exibe o FOR */}
            {tabuada}
        </div>
    );
}