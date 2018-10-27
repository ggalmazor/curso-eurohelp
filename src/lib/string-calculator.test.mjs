import sc from './string-calculator.mjs';

test("Puede sumar numeros separados con coma dentro de una cadena", () => {
  expect(sc("")).toBe(0);
  expect(sc("1")).toBe(1);
  expect(sc("2")).toBe(2);
  expect(sc("1,2")).toBe(3);
  expect(sc("10,20")).toBe(30);
  expect(sc("1,2,3")).toBe(6);
});

describe("Puede usar otros separadores", () => {
  test("Admite el carácter de nueva línea como separador", () => {
    expect(sc("1\n2")).toBe(3);
  });
  test("Permite definir separadores personalizados", () => {
    expect(sc("//;\n1;2")).toBe(3);
    expect(sc("//[***]\n1***2")).toBe(3);
    expect(sc("//[***][~]\n1***2~3")).toBe(6);
  });
});

describe("Reglas especiales sobre números", () => {
  test("Falla si detecta números negativos", () => {
    expect(() => sc("-1,2")).toThrow(/-1/);
  });

  test("Ignora números mayores o iguales a 1000", () => {
    expect(sc("1000,2")).toBe(2);
  });
});

