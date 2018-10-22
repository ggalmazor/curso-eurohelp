const intersectPair = criteria => (a, b) => a.filter(ax => b.some(bx => criteria(ax, bx)));
export const intersect = criteria => arrays => arrays.reduce(intersectPair(criteria));