export default class Comic {
  constructor(id, titulo, personajes) {
    this.id = id;
    this.titulo = titulo;
    this.personajes = personajes;
  }

  static from({id, title, characters}) {
    return new Comic(id, title, characters);
  }

  getId() {
    return this.id;
  }

  getTitulo() {
    return this.titulo;
  }

  getPersonajes() {
    return this.personajes;
  }
}