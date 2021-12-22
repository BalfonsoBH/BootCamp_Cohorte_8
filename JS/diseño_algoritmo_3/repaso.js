




const comidas = ['pozole', 'tacos', 'tosdaas'];
console.log(comidas.length);
/* 
push  poner un elemento al final
pop   quitar un elemnto al final
unshift  poner un elemnto al inicio
shift    quitar un elemnto al inicio
*/

comidas.push('tortas');
console.log(comidas);

comidas.pop();
console.log(comidas);

comidas.shift();
console.log(comidas);

/* forEach - ayuda a relaizar una accion
              por cada elemento dle arreglo
              de forma automatica*/

console.log(comidas[0]);
console.log(comidas[3]);
console.log(comidas[2]);
//funcion anonima o sin nombre
comidas.forEach(function(el){
    console.log(el);
})

const numeros = [1, 2, 3, 4, 5,];
console.log(numeros);
numeros.forEach(function(el){
    let suma = el + 1;
    console.log(suma);
})

//ejercicio
const arr = [];
function suma(num) {
    let sum = num + 1;
    return arr.push(sum);
}

suma(3);
suma(4);
suma(1);
suma(2);
suma(7);

console.log(arr);