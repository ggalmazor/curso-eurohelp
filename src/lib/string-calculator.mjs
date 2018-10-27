const replaceAll = (replacement, search, text) => text.replace(new RegExp(search, "g"), replacement);

const normalize = input => {
  let normalizedInput = replaceAll(",", "\n", input);
  if (normalizedInput.startsWith("//")) {
    const separator = normalizedInput[2];
    const body = normalizedInput.substring(4);
    normalizedInput = replaceAll(",", separator, body);
  }
  return normalizedInput;
};

export default input => {
  if (input === "")
    return 0;

  const normalizedInput = normalize(input);

  const parts = normalizedInput.split(",");
  const numbers = parts.map(part => parseInt(part, 10));
  return numbers.reduce((a, b) => a + b, 0);
}