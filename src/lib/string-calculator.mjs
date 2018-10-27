const escapeRegExp = search => search.replace(/\*/g, "\\*");
const replaceAll = (replacement, search, text) => text.replace(new RegExp(escapeRegExp(search), "g"), replacement);

const normalize = input => {

  if (input.startsWith("//[")) {
    const body = input.substring(input.indexOf("\n") + 1);
    const separators = input.substring(3, input.lastIndexOf("]")).split("][");
    return separators.reduce(
        (output, separator) => replaceAll(",", separator, output),
        body
    );
  }
  if (input.startsWith("//")) {
    const body = input.substring(input.indexOf("\n") + 1);
    const separators = [input[2]];
    return separators.reduce(
        (output, separator) => replaceAll(",", separator, output),
        body
    );
  }
  return replaceAll(",", "\n", input);
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