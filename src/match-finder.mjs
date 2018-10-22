import api from './data/api.mjs';
import View from './view.mjs';

const view = View();

const interseccion = criteria => (a, b) => a.filter(ax => b.some(bx => criteria(ax, bx)));

view.onReady(() => {
  api.personajes().then(view.addPersonajes);

  view.onBuscar(([id1, id2]) => {
    Promise.all([api.comics(id1), api.comics(id2)])
        .then(([comics1, comics2]) => interseccion((a, b) => a.equals(b))(comics1, comics2))
        .then(view.addComics)
  });
});
