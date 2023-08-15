//Artículo o nota actual
if (d.getElementById("post-blog")) {
    let post;

    const currentPost = data.posts.filter(
      (el) =>
        location.pathname === `/${el.slug}` ||
        location.pathname === `/${el.slug}.html`
    );

    if (currentPost.length === 0) {
      const currentToughts = data.thoughts.filter(
        (el) =>
          location.pathname === `/${el.slug}` ||
          location.pathname === `/${el.slug}.html`
      );

      post = currentToughts[0];
    } else {
      post = currentPost[0];
    }

    d.getElementById("post-blog").innerHTML = `
        <h1>${post.title}</h1>
        <aside class="post-date">
          <small>
            <span>Última actualización:</span>
            <i>
              <time datetime="${post.date}">
                ${humanDate(post.date)}
              </time>
            </i>
          </small>
        </aside>
        <img class="post-category" src="img/category/${
          post.category
        }.svg" alt="Categoría: ${post.category}" title="Categoría: ${
      post.category
    }" loading="lazy">
      `;
}

/* d.getElementById("text").innerHTML = `
    "<p>"+('<!DOCTYPE html>')+"</p>",
    "<p>"+('<html lang="en">')+"</p>",
    "<p>"+('  <head>')+"</p>"
`; */

let enviar = document.getElementById("enviar");
let texto = document.getElementById("texto");
let text = document.getElementById("text");

function elementos() {
  if(texto.value) {
      // crear elementos
    let contenedor = document.createElement("div");
    contenedor.classList.add("container");
    contenedor.id("contenedor");

    // Crear parrafo
    let parrafo = document.getElementById("p");
    contenedor.appendChild(parrafo);
    parrafo.innerText = texto.value;

    text.appendChild(contenedor);
    }
    else {
      alert("ingresar datos");
    }
}

enviar.addEventListener("click", elementos);