import Personaje from './personaje.mjs';
import Comic from './comic.mjs';
import {map} from "../lib/arrays.mjs";
import {callMethod} from "../lib/objects.mjs";

const personajes = async () => fetch('/json/characters.json')
    .then(callMethod('json'))
    .then(map(Personaje.from));

const comics = async characterId => fetch(`/json/comics-${characterId}.json`)
    .then(callMethod('json'))
    .then(map(Comic.from));

export default {personajes, comics};
