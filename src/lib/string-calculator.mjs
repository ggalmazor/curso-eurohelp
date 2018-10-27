const replaceAll = (replacement, search, text) => text.replace(new RegExp(search, "g"), replacement);

export default input => {
  if (input === "")
    return 0;

  let normalizedInput = replaceAll(",", "\n", input);
  if (normalizedInput.startsWith("//")){
    normalizedInput = replaceAll(",", normalizedInput[2], normalizedInput.substring(4));
  }

  const parts = normalizedInput.split(",");
  const numbers = parts.map(part => parseInt(part, 10));
  return numbers.reduce((a, b) => a + b, 0);
}