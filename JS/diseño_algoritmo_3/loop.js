/* 
ciclos - loops - bucles 

while
for

*/

//todos los numeros del uno al 100

/* let contador = 1;

while(contador <= 10){
    console.log(contador);
    //contador = contador + 1;
    contador++;
    /* contador--; resta un numero
} */
//si no se cumple, no se ejecuta 


/* let numero = 11;
do {
    console.log(numero);
    numero++
} while (numero <=10); */

//hace primero la comprobación, por lo que se ejecuta por lo menos una vez
//pega y luego pregunta

/* 
for
utiliza contador
*/
for (let control = 1; control <= 10; control++ ){
    console.log(control);
}

const comida = ['pozole', 'tacos', 'tamales', 'tortas'];

for (let i = 0; i < comida.length; i++) {
    console.log(comida[i ]);
}