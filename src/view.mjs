function buildOption(personaje) {
  return `<option value="${personaje.id}">${personaje.name}</option>`;
}

function addOption(option) {
  document.querySelector('#personaje1').innerHTML += option;
  document.querySelector('#personaje2').innerHTML += option;
}

function addPersonajes(personajes) {
  for (let i = 0; i < personajes.length; i++)
    addOption(buildOption(personajes[i]));
}

function onReady(block) {
  document.addEventListener("DOMContentLoaded", block);
}

function onBuscar(callback) {
  document.querySelector('#buscar').addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector('#resultados tbody').innerHTML = '';
    const id1 = document.querySelector('#personaje1').value;
    const id2 = document.querySelector('#personaje2').value;
    callback([id1, id2]);
  });
}

function addComic(comic) {
  document.querySelector('#resultados tbody').innerHTML += `
    <tr>
      <td>${comic.id}</td>
      <td>${comic.title}</td>
      <td>${comic.characters}</td>
    </tr>
  `;
}

export default {onReady, onBuscar, addPersonajes, addComic};
