export default () => {
  const dom = {
    p1: document.querySelector('#personaje1'),
    p2: document.querySelector('#personaje2'),
    buscar: document.querySelector('#buscar'),
    resultados: document.querySelector('#resultados tbody')
  };

  const addPersonajes = personajes => {
    const options = personajes.map(personaje => `<option value="${personaje.getId()}">${personaje.getNombre()}</option>`).join("\n");
    dom.p1.innerHTML = options;
    dom.p2.innerHTML = options;
  };

  const onReady = block => document.addEventListener("DOMContentLoaded", block);

  const onBuscar = callback => dom.buscar.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    callback([dom.p1.value, dom.p2.value]);
  });

  const buildComic = comic => `<tr>
    <td>${comic.getId()}</td>
    <td>${comic.getTitulo()}</td>
    <td>${comic.getPersonajes()}</td>
  </tr>`;

  const addComics = comics => dom.resultados.innerHTML = comics.map(comic => buildComic(comic)).join("\n");

  return {onReady, onBuscar, addPersonajes, addComics};
}
