export default input => {
  if (input === "")
    return 0;

  if (input.indexOf(",") === -1)
    return parseInt(input, 10);

  return parseInt(input.substring(0, input.indexOf(","))) + parseInt(input.substring(input.indexOf(",") + 1));
}