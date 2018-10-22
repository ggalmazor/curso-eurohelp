import api from './data/api.mjs';
import View from './view.mjs';

const view = View();

view.onReady(() => {
  api.personajes(view.addPersonajes);

  view.onBuscar(([id1, id2]) => {
    api.comics(id1, comics1 => {
      api.comics(id2, comics2 => {
        for (let i = 0; i < comics1.length; i++)
          for (let j = 0; j < comics2.length; j++)
            if (comics1[i].id === comics2[j].id)
              view.addComic(comics1[i]);
      });
    });
  });
});
