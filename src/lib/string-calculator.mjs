export default input => {
  if (input === "")
    return 0;

  if (input.indexOf(",") === -1)
    return parseInt(input, 10);

  const partA = input.substring(0, input.indexOf(","));
  const partB = input.substring(input.indexOf(",") + 1);
  return parseInt(partA) + parseInt(partB);
}