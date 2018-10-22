import Personaje from './personaje.mjs';
import Comic from './comic.mjs';

const personajes = () => fetch('/json/characters.json')
    .then(response => response.json())
    .then(data => data.map(Personaje.from));

const comics = characterId => fetch(`/json/comics-${characterId}.json`)
    .then(response => response.json())
    .then(data => data.map(Comic.from));

export default {personajes, comics};
