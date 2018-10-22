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

export default {addPersonajes};
