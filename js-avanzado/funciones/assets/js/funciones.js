/* funcion
bloque de codigo reutilizable
puede tener o no parametros de entrada
puede devolver o no un valor */


function suma(numero1, numero2) {
    //operaciones a realizar o codigo a ejecutar
    return numero1 + numero2;
    console.log('Hola desde la funcion'); 
}

function restar(numero1, numero2) {
    document.write(`La resta de ${numero1} y ${numero2} es ${numero1 - numero2} <br>`);
}

let numero1 = parseInt(prompt('Numero 1'));
let numero2 = parseInt(prompt('Numero 2'));
let sumaN = suma(numero1, numero2);


/* template string `texto y javascript` */
document.write(`La suma de ${numero1} y ${numero2} es ${sumaN} <br>`);
restar(numero1, numero2);
document.write('La suma de ' + numero1 + ' y ' + numero2 + ' es ' + sumaN);
