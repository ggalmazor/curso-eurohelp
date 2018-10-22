function Comic(id, titulo, personajes) {
  this.id = id;
  this.titulo = titulo;
  this.personajes = personajes;
}

Comic.prototype.getId = function () {
  return this.id;
};

Comic.prototype.getTitulo = function () {
  return this.titulo;
};

Comic.prototype.getPersonajes = function () {
  return this.personajes;
};

Comic.from = function ({id, title, characters}) {
  return new Comic(id, title, characters);
};

export default Comic;