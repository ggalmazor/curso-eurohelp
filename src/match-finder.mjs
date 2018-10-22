import api from './data/api.mjs';

document.addEventListener("DOMContentLoaded", () => {

  const view = {
    buildOption(personaje) {
      return `<option value="${personaje.id}">${personaje.name}</option>`;
    },
    addOption(option) {
      document.querySelector('#personaje1').innerHTML += option;
      document.querySelector('#personaje2').innerHTML += option;
    },
    addPersonajes(personajes) {
      for (let i = 0; i < personajes.length; i++) {
        const option = this.buildOption(personajes[i]);
        this.addOption(option);
      }
    }
  };

  api.personajes(personajes => {
    view.addPersonajes(personajes);
  });

  document.querySelector('#buscar').addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector('#resultados tbody').innerHTML = '';
    const id1 = document.querySelector('#personaje1').value;
    const id2 = document.querySelector('#personaje2').value;
    api.comics(id1, comics1 => {
      api.comics(id2, comics2 => {
        for (let i = 0; i < comics1.length; i++)
          for (let j = 0; j < comics2.length; j++)
            if (comics1[i].id === comics2[j].id)
              document.querySelector('#resultados tbody').innerHTML += `
                <tr>
                  <td>${comics1[i].id}</td>
                  <td>${comics1[i].title}</td>
                  <td>${comics1[i].characters}</td>
                </tr>
              `;
      });
    });
  });
});
