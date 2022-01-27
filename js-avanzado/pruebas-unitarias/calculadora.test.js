
const {sumar, restar, multiplicar, dividir} = require('./calculadora');

describe('Pruebas en el componente calculadoa', () => {

    test('Prueba en la funcion sumar', () => {
        expect(sumar(3, 5)).toBe(8);
    });

    test('Prueba en la funcion restar', () => {
        expect(restar(8, 7)).toBe(1);
    });
    test('Prueba en la funcion multiplicar', () => {
        expect(multiplicar(10, 5)).toBe(50);
    });
    test('Prueba en la funcion dividir', () => {
        expect(dividir(9, 3)).toBe(3);
    });

});

