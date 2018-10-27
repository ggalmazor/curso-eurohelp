import sc from './string-calculator.mjs';

test("Puede sumar una cadena vacía", () => {
  expect(sc("")).toBe(0);
  expect(sc("1")).toBe(1);
  expect(sc("2")).toBe(2);
  expect(sc("1,2")).toBe(3);
  expect(sc("10,20")).toBe(30);
});