let cadena1 = 'hola';
console.log(cadena1);

let cadena2 = new String('adios'); //objeto string
console.log(cadena2);

//includes( busca una cadena en otra y regresa true o false)
console.log(cadena2.toLowerCase().includes('A'));
//convierte de mayuscula a minuscula
console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());


//coherción y conversión

//realiza una acción automaticamente sobre un dato (cohesion)
console.log(cadena1.toLowerCase());

/* funcion que recbe una palabra y 
la regresa invertida */

let palabra = 'Hola mundo';
let arreglo = palabra.split(''); //divide a partir del elemento en los parentesis
console.log(arreglo);
/* 
console.log(arreglo.reverse(),join(""));
 */
function invertirP (cadena) {
    let arreglo = cadena.split("");/* convirtiendo
    la cadena en un arreglo */
    arreglo.reverse();
    //invirtiendo el arreglo
    let cadenaInvert = arreglo.join('');
    //une los elemento y regresa un string
    return console.log(cadenaInvert);
}

invertirP('Generation');


document.write('Invertidor de palabras <br>')
let cad = prompt('Numero')
/* document.write(cad); */
function invertM (cadena) {
    let arreglo = cadena.split('');
    arreglo.reverse();
    let cadenaIn = arreglo.join('');
    return document.write(cadenaIn);
}


/* for (let i = 0; i < cad.length; i++) {
    console.log(cad);
    if (cad[i] === ' ') {
        function invertM (cadena) {
            let arreglo = cadena.split(' ');
            arreglo.reverse();
            let cadenaIn = arreglo.join(' ');
            return document.write(cadenaIn);
        }
    } else {
        function invertM (cadena) {
            let arreglo = cadena.split('');
            arreglo.reverse();
            let cadenaIn = arreglo.join('');
            return document.write(cadenaIn);
        }
    }
}
 */
document.write(invertM(cad));


