async function consumindoApi() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
    data.slice(0, 10).forEach((post) => {

      const div = document.createElement("div");
      div.classList.add("post")

      const h1 = document.createElement("h1");
      h1.textContent = post.title;

      const p = document.createElement("p");
      p.textContent = post.body;

      div.appendChild(h1);
      div.appendChild(p);

      document.body.appendChild(div);
    });
  } catch (error) {
    console.error("Erro ao consumir a API:", error);
  }
}

consumindoApi();
