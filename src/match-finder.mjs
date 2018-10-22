import api from './data/api.mjs';
import View from './view.mjs';

const view = View();


const interseccion = criteria => (comics1, comics2) => comics1.filter(comic1 => comics2.some(comic2 => criteria(comic1, comic2)));

view.onReady(() => {
  api.personajes().then(view.addPersonajes);

  view.onBuscar(([id1, id2]) => {
    Promise.all([api.comics(id1), api.comics(id2)])
        .then(([comics1, comics2]) => interseccion((a, b) => a.equals(b))(comics1, comics2))
        .then(view.addComics)
  });
});
