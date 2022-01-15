/* operadores aritmeticos */
//  + - / * %(residuo) 

let operacion = 3 + 5 + (10 - 5);
console.log(operacion)

let opoeracion2 = 3 - 5 / 2 * 4;
console.log(opoeracion2)

/* operadores relacionales */
// < > <= >= == === != !===
// boolean true false

console.log(7 < 7);
console.log(7 <= 7);

console.log(7 == '7');
console.log(7 === '7');

console.log(7 != '7');
console.log(7 !== '7');

/* operadores de incremento y decremento */
// +-, -=, *=, /=

let incremento = 5;
incremento += 5; //incremento = incremento + 5
console.log(incremento);


incremento -= 5; //incremento = incremento - 5
console.log(incremento);

incremento *= 5; //incremento = incremento * 5
console.log(incremento);

incremento /= 5; //incremento = incremento / 5
console.log(incremento);

/* operadores unarios de incremento y decremento */
//++, --

//variable++= postincremento
let sumar = 0;
sumar++;
console.log(sumar);

sumar--;
console.log(sumar);

for (let i = 0; i < 10; i++) {
    /* codigo */
}
// ++variable=preincremento
//modifica el valor y despues
//hace uso de la variable
let num = 5;
console.log(++num);

for (let i = 0; i < 10; i++) {
    //iteracion
    //primera iteración, se detiene
    console.log('Ciclo padre')
    for (let j = 0; j < 10; j++) {
        //hace sus repeticiones propias
        console.log('Ciclo hijo')
    }
}