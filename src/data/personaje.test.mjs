import Personaje from './personaje.mjs';

test('Personaje factory', () => {
  const p = Personaje.from({id: 1, name: "Some name"});
  expect(p.getId()).toBe(1);
  expect(p.getNombre()).toBe("Some name");
});