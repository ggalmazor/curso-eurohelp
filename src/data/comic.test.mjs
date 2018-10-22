import Comic from './comic.mjs';

test('Comic factory', () => {
  const c = Comic.from({id: 1, title: "Some title", characters: ["Char #1", "Char #2"]});
  expect(c.getId()).toBe(1);
  expect(c.getTitulo()).toBe("Some title");
  expect(c.getPersonajes()).toEqual(["Char #1", "Char #2"]);
});