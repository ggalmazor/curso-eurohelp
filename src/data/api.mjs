import Personaje from './personaje.mjs';
import Comic from './comic.mjs';

function personajes() {
  return fetch('/json/characters.json')
      .then(response => response.json())
      .then(data => data.map(Personaje.from));
}

function comics(characterId) {
  return fetch(`/json/comics-${characterId}.json`)
      .then(response => response.json())
      .then(data => data.map(Comic.from));
}

export default {personajes, comics};
