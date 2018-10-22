import api from './data/api.mjs';

document.addEventListener("DOMContentLoaded", () => {
  api.personajes(personajes => {
    for (let i = 0; i < personajes.length; i++) {
      document.querySelector('#personaje1').innerHTML += `<option value="${personajes[i].id}">${personajes[i].name}</option>`;
      document.querySelector('#personaje2').innerHTML += `<option value="${personajes[i].id}">${personajes[i].name}</option>`;
    }
  });
});
