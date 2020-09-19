const imgView = document.getElementById("image-content");
const textView = document.getElementById("text-content");

function renderImage(image) {
    imgView.setAttribute('src', image);
}

function renderText(textoApi) {
    textView.textContent = textoApi;
}

let pok = Number(prompt('que pokemon quieres consultar?'));

fetch(`https://pokeapi.co/api/v2/pokemon/${pok}/`)
    .then(response => response.json())
    .then(pokemon => {
        renderImage(pokemon.sprites.front_default)
        renderText(pokemon.name)
    })