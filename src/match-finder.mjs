import api from './data/api.mjs';

document.addEventListener("DOMContentLoaded", () => {
  // Ejemplo: Definir los <option> de un select
  document.querySelector('#personaje1').innerHTML = '<option value="">Súper López</option>';

  // Ejemplo: Llamar al API para obtener los personajes
  api.personajes(personajes => console.log(personajes));
});
