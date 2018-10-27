import sc from './string-calculator.mjs';

test("Puede sumar una cadena vacía", () => {
  expect(sc("")).toBe(0);
});