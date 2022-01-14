/* 
Funcion de flecha
*/

/* function suma(numero1, numero2) {
    return numero1 + numero2;
} */

const suma = (numero1, numero2) => {
    return numero1 + numero2;
}

let numero1 = parseInt(prompt('Numero 1'));
let numero2 = parseInt(prompt('Numero 2'));
let sumaN = suma(numero1, numero2);


/* template string `texto y javascript` */
document.write(`La suma de ${numero1} y ${numero2} es ${sumaN} <br>`);