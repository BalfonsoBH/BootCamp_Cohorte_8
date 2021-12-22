/* 
colección de elementos 
tienen metodos o funciones que nos permiten ordenar o manipular datos almacenados
*/

const arreglo1 = [4, true, 'hola', [1, 2, false]];
console.log(arreglo1);

const arreglo2 = Array.of(1, 'hola', true);
console.log(arreglo2);

// manera en desuso
const arreglo3 = new Array(3, true, 'hola');
console.log(arreglo3);


const frutas = ['manzanas', 'naranjas', 'uvas',
 'sandias', [1, 2, 3, 4, 5, ['A', 'B', 'C']]];
//notación corchetes
console.log(frutas[1]);
console.log(frutas[4][4]); /* se busca un elemeto de un arreglo
dentro del otro arreglo */
console.log(frutas[4][5][1]);

//metodos
/*  Length = longitud*/
const letras = ['A', 'B', 'C', 'D'];
console.log(letras.length);

/* push = añade un elemnto al final del arreglo */
letras.push('E');
console.log(letras);

/* pop = elimina el ultimo elemento */
letras.pop();
console.log(letras);

/* unshift = agrega un elemnto al inicio */
letras.unshift(1);
console.log(letras);

/* shift = elimina el primer elemento */
letras.shift();
console.log(letras);