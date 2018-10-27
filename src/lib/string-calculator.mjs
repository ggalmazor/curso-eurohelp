export default input => {
  if (input === "")
    return 0;

  let normalizedInput = input.replace(/\n/g, ",");
  if (normalizedInput.startsWith("//")){
    normalizedInput = normalizedInput.substring(4).replace(new RegExp(normalizedInput[2], "g"), ",");
  }

  const parts = normalizedInput.split(",");
  const numbers = parts.map(part => parseInt(part, 10));
  return numbers.reduce((a, b) => a + b, 0);
}