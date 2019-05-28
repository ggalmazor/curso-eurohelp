export default numeros => {
  let resultado = 0;
  for (let numero of numeros) {
    numero += 10;
    if (numero % 2 === 1)
      resultado += numero;
  }
  return resultado;
};
