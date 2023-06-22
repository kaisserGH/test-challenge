const factorial = require('../factorial');

test('Factorial de 0 es 1', () => {
    expect(factorial(0)).toBe(1);
});

test('Factorial de 1 es 1', () => {
    expect(factorial(1)).toBe(1);
});

test('Factorial de 5 es 120', () => {
    expect(factorial(5)).toBe(120);
});

test('Factorial de número negativo arroja un error', () => {
    expect(() => factorial(-1)).toThrow('El factorial solo está definido para números no negativos.');
});