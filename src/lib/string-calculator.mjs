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


export default input => {
  if (input === "")
    return 0;

  const normalizedInput = normalize(input);

  const parts = normalizedInput.split(",");
  const numbers = parts.map(part => parseInt(part, 10));

  const negativeNumbers = numbers.filter(n => n < 0);
  if (negativeNumbers.length > 0)
    throw new Error(`Negatives are not allowed: ${negativeNumbers.join(", ")}`);

  const numbersToSum = numbers.filter(n => n < 1000);

  return numbersToSum.reduce((a, b) => a + b, 0);
}