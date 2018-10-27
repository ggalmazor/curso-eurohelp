const escapeRegExp = search => search.replace(/\*/g, "\\*");
const replaceAll = replacement => (text, search) => text.replace(new RegExp(escapeRegExp(search), "g"), replacement);

const parseSeparators = input => input.startsWith("//[")
    ? input.substring(3, input.lastIndexOf("]")).split("][")
    : input.startsWith("//")
        ? [input[2]]
        : ["\n"];

const parseBody = input => input.startsWith("//")
    ? input.substring(input.indexOf("\n") + 1)
    : input;

const normalize = input => parseSeparators(input).reduce(replaceAll(","), parseBody(input));

const lessThan = n => m => m < n;
const sum = (a, b) => a + b;

const checkNegatives = numbers => {
  const negativeNumbers = numbers.filter(lessThan(0));
  if (negativeNumbers.length > 0)
    throw new Error(`Negatives are not allowed: ${negativeNumbers.join(", ")}`);
};

const split = separator => text => text.split(separator);

const toInt = n => parseInt(n, 10);

const map = mapper => array => array.map(mapper);
const filter = predicate => array => array.filter(predicate);
const reduce = (binaryFn, identity) => array => array.reduce(binaryFn, identity);

const peek = fn => input => {
  fn(input);
  return input;
};

const compose = (fa, fb) => input => fb(fa(input));
const pipe = (...fns) => fns.reduce(compose, i => i);

export default pipe(
    normalize,
    split(","),
    map(toInt),
    peek(checkNegatives),
    filter(lessThan(1000)),
    reduce(sum, 0)
);