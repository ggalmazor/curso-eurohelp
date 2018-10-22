export default class Personaje {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }

  static from({id, name}) {
    return new Personaje(id, name);
  }

  getId() {
    return this.id;
  }

  getNombre() {
    return this.nombre;
  }
}