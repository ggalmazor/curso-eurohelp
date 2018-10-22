import api from './data/api.mjs';
import View from './view.mjs';

const view = View();

const intersectPair = criteria => (a, b) => a.filter(ax => b.some(bx => criteria(ax, bx)));
const intersect = criteria => arrays => arrays.reduce(intersectPair(criteria));

view.onReady(() => {
  api.personajes().then(view.addPersonajes);

  view.onBuscar(([id1, id2]) => Promise.all([api.comics(id1), api.comics(id2)])
      .then(intersect((a, b) => a.equals(b)))
      .then(view.addComics));
});
