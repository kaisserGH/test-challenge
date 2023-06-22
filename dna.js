const cadena_dna = (cadena) => {

  const canonicas = ['C', 'T', 'A', 'G'];
  let resultado = '';

  for (let i = 0; i < cadena.length; i++) {
    const base = cadena[i];

    if (canonicas.includes(base)) {
      resultado += base;
    }
  }

  return resultado;
}

module.exports = cadena_dna;