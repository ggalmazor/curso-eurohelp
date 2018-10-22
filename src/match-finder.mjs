import api from './data/api.mjs';
import View from './view.mjs';

const view = View();

view.onReady(() => {
  api.personajes().then(view.addPersonajes);

  view.onBuscar(([id1, id2]) => {
    Promise.all([api.comics(id1), api.comics(id2)])
        .then(([comics1, comics2]) => {
          const comics = [];
          for (let i = 0; i < comics1.length; i++)
            for (let j = 0; j < comics2.length; j++)
              if (comics1[i].id === comics2[j].id)
                comics.push(comics1[i]);
          return comics;
        })
        .then(view.addComics)
  });
});
