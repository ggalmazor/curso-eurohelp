function personajes(callback) {
  fetch('/json/characters.json')
      .then(response => response.json())
      .then(callback);
}

function comics(characterId, callback) {
  fetch(`/json/comics-${characterId}.json`)
      .then(response => response.json())
      .then(callback);
}

export default {personajes, comics};
