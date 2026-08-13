const form = document.getElementById("formPost");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", async (event) => {

    // Impede o formulário de recarregar a página
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const mensagem = document.getElementById("mensagem").value;

    // Número aleatório entre 1 e 10
    const userId = Math.floor(Math.random() * 10) + 1;

    const post = {
        title: titulo,
        body: mensagem,
        userId: userId
    };

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(post)
            }
        );

        if (!response.ok) {
            throw new Error("Erro ao enviar o formulário.");
        }

        const data = await response.json();

        resultado.innerHTML = `
            <h2>Post enviado com sucesso!</h2>

            <p><strong>Título:</strong> ${data.title}</p>

            <p><strong>Mensagem:</strong> ${data.body}</p>

            <p><strong>ID do usuário:</strong> ${data.userId}</p>
        `;

        // Limpa os campos do formulário
        form.reset();

    } catch (error) {

        resultado.innerHTML = `
            <p>Erro ao enviar o formulário: ${error.message}</p>
        `;

    }
});