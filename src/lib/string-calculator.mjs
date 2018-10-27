export default input => {
  if (input === "")
    return 0;

  const normalizedInput = input.replace(/\n/g, ",");

  const parts = normalizedInput.split(",");
  const numbers = parts.map(part => parseInt(part, 10));
  return numbers.reduce((a, b) => a + b, 0);
}