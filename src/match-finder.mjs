import api from './data/api.mjs';
import view from './view.mjs';

view.onReady(() => {
  api.personajes(personajes => {
    view.addPersonajes(personajes);
  });

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
