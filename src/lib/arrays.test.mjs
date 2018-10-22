const {intersect} = require("./arrays.mjs");

const eqeqeq = (a, b) => a === b;

test('adds 1 + 2 to equal 3', () => {
  expect(intersect(eqeqeq)([], [])).toEqual([]);
});