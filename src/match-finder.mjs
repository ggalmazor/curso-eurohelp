import api from './data/api.mjs';
import View from './view.mjs';
import {intersect} from "./lib/arrays.mjs";

const view = View();

view.onReady(async () => {
  view.addPersonajes(await api.personajes());

  view.onBuscar(([id1, id2]) => Promise.all([api.comics(id1), api.comics(id2)])
      .then(intersect((a, b) => a.equals(b)))
      .then(view.addComics));
});
