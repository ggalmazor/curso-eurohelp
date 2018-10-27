const replaceAll = (replacement, search, text) => text.replace(new RegExp(search, "g"), replacement);

export default input => {
  if (input === "")
    return 0;

  let normalizedInput = input.replace(/\n/g, ",");
  if (normalizedInput.startsWith("//")){
    const search = normalizedInput[2];
    const text = normalizedInput.substring(4);
    const replacement = ",";
    normalizedInput = replaceAll(replacement, search, text);
  }

  const parts = normalizedInput.split(",");
  const numbers = parts.map(part => parseInt(part, 10));
  return numbers.reduce((a, b) => a + b, 0);
}