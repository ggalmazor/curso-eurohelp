const escapeRegExp = search => search.replace(/\*/g, "\\*");
const replaceAll = (replacement, search, text) => text.replace(new RegExp(escapeRegExp(search), "g"), replacement);

const normalize = input => {
  let body;
  let separators;
  if (input.startsWith("//[")) {
    body = input.substring(input.indexOf("\n") + 1);
    separators = input.substring(3, input.lastIndexOf("]")).split("][");
  } else if (input.startsWith("//")) {
    body = input.substring(input.indexOf("\n") + 1);
    separators = [input[2]];
  } else {
    body = input;
    separators = ["\n"];
  }
  return separators.reduce(
      (output, separator) => replaceAll(",", separator, output),
      body
  );
};

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