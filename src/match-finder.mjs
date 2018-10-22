import api from './data/api.mjs';

document.addEventListener("DOMContentLoaded", () => {
  api.personajes(personajes => {
    for (let i = 0; i < personajes.length; i++) {
      document.querySelector('#personaje1').innerHTML += `<option value="${personajes[i].id}">${personajes[i].name}</option>`;
      document.querySelector('#personaje2').innerHTML += `<option value="${personajes[i].id}">${personajes[i].name}</option>`;
    }
  });

  document.querySelector('#buscar').addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    console.log(`P1: ${document.querySelector('#personaje1').value}, P2: ${document.querySelector('#personaje2').value}`);
  });
});
