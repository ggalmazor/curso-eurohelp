const intersectPair = criteria => (a, b) => a.filter(ax => b.some(bx => criteria(ax, bx)));
export const intersect = criteria => arrays => {
  if (arrays.length === 0)
    return [];
  if (arrays.length === 1)
    return arrays[0];
  return arrays.reduce(intersectPair(criteria));
};

export const map = mapper => array => array.map(mapper);