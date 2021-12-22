/* 
operadores aritmeticos
+ sumar o concatenar
-
*
% modulo residuo, sirve para obtener el residuo de una división, ayuda cunado hay que saber si un numero es par
/

todo lo que viene del prompt es un string, hay que convertir con parseInt
*/

const numero1 = parseInt(prompt('Ingresa el numero 1 '));
const numero2 = parseInt(prompt('Ingresa el numero 2 '));
const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;
const residuo = numero1 % numero2;

console.log('numero 1 ' + numero1);
console.log('numero 2 ' + numero2);
console.log('Suma ' + suma);
console.log('resta ' + resta);
console.log('multiplicción ' + multiplicacion);
console.log('división ' + division);
console.log('residuo ' + residuo);

console.log(5 % 3);

/* 
operadores logicos
&& AND o y
|| OR o
! NOT no
*/
