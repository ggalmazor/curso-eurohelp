export default input => {
  if (input === "")
    return 0;

  if (input.indexOf(",") === -1)
    return parseInt(input, 10);

  return parseInt(input[0]) + parseInt(input[2]);
}