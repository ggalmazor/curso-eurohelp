import sc from './string-calculator.mjs';

test("Puede sumar numeros separados con coma dentro de una cadena", () => {
  expect(sc("")).toBe(0);
  expect(sc("1")).toBe(1);
  expect(sc("2")).toBe(2);
  expect(sc("1,2")).toBe(3);
  expect(sc("10,20")).toBe(30);
  expect(sc("1,2,3")).toBe(6);
});