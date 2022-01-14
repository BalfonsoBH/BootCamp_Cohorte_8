let numeros = [1,2,3,13,12,134];


//funcion anonima
numeros.forEach(function(elemento){
    document.write(elemento + ', ');
});

/* numeros.forEach(elemento =>{
    document.write(elemento + ', ');
}); */

//map crea otro arreglo d eun areglo
let numeros2 = numeros.map(function(elemento) {
    return elemento;
});

document.write('<br>' + numeros2 + '<br>')

/* let frutas = ['mango', 'uva', 'piña']; */
/* let frutas2 = frutas;

document.write('<br>' + frutas + '<br>'); */
/* document.write('<br>' + frutas2 + '<br>');
 */
/* frutas2.push */




//includes
document.write('<br>' + numeros.includes(134) + '<br>');


let numerosPares = numeros.filter((elemento) =>{
    /* if (elemento % 2 == 0) {
        return true;
    } else {
        return false;
    } */
    /* return elemento % 2 == 0 */
    //resiudo de dividir el elemnto entre dos es 0
    //los elementos de comparación envian si o no
    if (elemento > 10) {
        return true;
    }
});

document.write('<br>' + numerosPares + '<br>');

let frutas = ['mango', 'uva', 'piña', 'mandarina', 'manzana', 'aguacate', 'sandia'];
let frutasFiltro = frutas.filter(() => {
    /* if (frutas.includes('i')) {
        return true;
    } */
    return frutas.includes('m');
});

document.write('<br>' + frutasFiltro + '<br>');