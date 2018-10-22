import Personaje from './personaje.mjs';
import Comic from './comic.mjs';

function personajes(callback) {
  fetch('/json/characters.json')
      .then(response => response.json())
      .then(data => data.map(Personaje.from))
      .then(callback);
}

function comics(characterId, callback) {
  fetch(`/json/comics-${characterId}.json`)
      .then(response => response.json())
      .then(data => data.map(Comic.from))
      .then(callback);
}

export default {personajes, comics};
