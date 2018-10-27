export default input => {
  if (input === "")
    return 0;

  if (input.indexOf(",") === -1)
    return parseInt(input, 10);

  const parts = input.split(",");
  const numbers = parts.map(part => parseInt(part, 10));
  return numbers.reduce((a, b) => a + b, 0);
}