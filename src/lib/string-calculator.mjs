const replaceAll = (replacement, search, text) => text.replace(new RegExp(search, "g"), replacement);

const normalize = input => {
  if (input.startsWith("//")) {
    const separator = input[2];
    const body = input.substring(4);
    return replaceAll(",", separator, body);
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

  return numbers.reduce((a, b) => a + b, 0);
}