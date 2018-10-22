export default () => {
  const dom = {
    p1: document.querySelector('#personaje1'),
    p2: document.querySelector('#personaje2'),
    buscar: document.querySelector('#buscar'),
    resultados: document.querySelector('#resultados tbody')
  };

  function addPersonajes(personajes) {
    for (let i = 0; i < personajes.length; i++) {
      const option = `<option value="${personajes[i].id}">${personajes[i].name}</option>`;
      dom.p1.innerHTML += option;
      dom.p2.innerHTML += option;
    }
  }

  function onReady(block) {
    document.addEventListener("DOMContentLoaded", block);
  }

  function onBuscar(callback) {
    dom.buscar.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      dom.resultados.innerHTML = '';
      callback([
        dom.p1.value,
        dom.p2.value
      ]);
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
