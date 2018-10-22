function Personaje(id, nombre) {
  this.id = id;
  this.nombre = nombre;
}

Personaje.prototype.getId = function () {
  return this.id;
};

Personaje.prototype.getNombre = function () {
  return this.nombre;
};

Personaje.from = function ({id, name}) {
  return new Personaje(id, name);
};

export default Personaje;