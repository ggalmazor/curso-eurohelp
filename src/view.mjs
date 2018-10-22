export default () => {
  const dom = {
    p1: document.querySelector('#personaje1'),
    p2: document.querySelector('#personaje2'),
    buscar: document.querySelector('#buscar'),
    resultados: document.querySelector('#resultados tbody')
  };

  function buildOption(personaje) {
    return `<option value="${personaje.id}">${personaje.name}</option>`;
  }

  function addOption(option) {
    dom.p1.innerHTML += option;
    dom.p2.innerHTML += option;
  }

  function addPersonajes(personajes) {
    for (let i = 0; i < personajes.length; i++)
      addOption(buildOption(personajes[i]));
  }

  function onReady(block) {
    document.addEventListener("DOMContentLoaded", block);
  }

  function onBuscar(callback) {
    dom.buscar.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      dom.resultados.innerHTML = '';
      const id1 = dom.p1.value;
      const id2 = dom.p2.value;
      callback([id1, id2]);
    });
  }

  function addComic(comic) {
    dom.resultados.innerHTML += `
      <tr>
        <td>${comic.id}</td>
        <td>${comic.title}</td>
        <td>${comic.characters}</td>
      </tr>
    `;
  }

  return {onReady, onBuscar, addPersonajes, addComic};
}
