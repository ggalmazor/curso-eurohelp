import api from './data/api.mjs';
import View from './view.mjs';

const view = View();

view.onReady(() => {
  api.personajes().then(view.addPersonajes);

  view.onBuscar(([id1, id2]) => {
    Promise.all([api.comics(id1), api.comics(id2)])
        .then(([comics1, comics2]) => comics1.filter(comic1 => comics2.some(comic2 => comic1.id === comic2.id)))
        .then(view.addComics)
  });
});
