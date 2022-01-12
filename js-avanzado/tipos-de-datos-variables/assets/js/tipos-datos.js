let nombre = 'Alfonso Hernández';
let edad = 31;
let tienesTrabajo = false;
let variablNull = null;
let variableUndefined;


console.log(typeof(nombre));
console.log(typeof(edad));
console.log(typeof(tienesTrabajo));
console.log(typeof(variablNull));
console.log(typeof(variableUndefined));


/* operador normal revisa valores
   operador estricto revisa valor y
   tipo de valor */

console.log(variablNull === variableUndefined);
console.log(variablNull == variableUndefined);
console.log('1' === 1);
console.log('1' == 1);
console.log(0 === false);

console.log(typeof(10 + 10));
console.log(typeof('10' + 10));
console.log(typeof(parseInt('11')));
console.log(parseInt('abc'));

let numero = 10;
console.log(typeof(numero.toString()));