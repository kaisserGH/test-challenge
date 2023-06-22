const cadena_dna = require('../dna')

test('Debe quitar las letras canonicas de la base de DNA del string', () => {
    expect(cadena_dna('ACTGACTG')).toBe('ACTGACTG');

    expect(cadena_dna('CTGAGTAC')).toBe('CTGAGTAC');
})

test ('Debe regresar una cadena vacia si el String DNA esta vacio', () => {
    expect(cadena_dna('')).toBe('');
})

test ('Debe regresar las letras canonicas de la base DNA del string y remover las no-canonicas', () => {
    expect(cadena_dna('ACTGactg')).toBe('ACTG');
})