const {intersect} = require("./arrays.mjs");

const eqeqeq = (a, b) => a === b;

test('Intersects a pair of arrays', () => {
  expect(intersect(eqeqeq)([[], []])).toEqual([]);
  expect(intersect(eqeqeq)([[1], []])).toEqual([]);
  expect(intersect(eqeqeq)([[], [1]])).toEqual([]);
  expect(intersect(eqeqeq)([[1], [1]])).toEqual([1]);
  expect(intersect(eqeqeq)([[1, 2], [2, 3]])).toEqual([2]);
});

test('Intersects an arbitrary number of arrays', () => {
  expect(intersect(eqeqeq)([[1, 2, 3], [2, 3, 4], [3, 4, 5]])).toEqual([3]);
});