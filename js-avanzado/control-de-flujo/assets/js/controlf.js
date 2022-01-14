/* 
orden de ejecución de las instrucciones que escribimos
Por lo general, va de arriba hacia abajo
*/

let miVariable = 10;
console.log(miVariable);

/* Estructuras de control de flujo */

let edad = 20;
let ine = true;

if (edad >= 18 || ine == true) {
    console.log('Puedes pasar')
} else {
    console.log('No puedes pasar')
}

/* operador ternario
(condición pequeña y unica a evaluar) ? se ejecuta si 
es verdadero : se ejecuta si es falso;
*/

let edad1 = 20;

(edad1 >= 18) 
? console.log('Mayor de edad') 
: console.log('Menor de edad');


let pregunta = (edad1 >= 18)
    ? "Mayor de edad"
    : "Menor de edad";

console.log(pregunta);

let preguntaEdad = `Tengo ${edad1} años y 
soy ${(edad1 >= 18) ? "Mayor de edad" : "Menor de edad"}`

console.log(preguntaEdad);


let dia = 3;

if (dia === 0){
    console.log('Domingo')
} else if (dia === 1){
    console.log('Lunes')
} else if (dia === 2){
    console.log('Martes')
} else if (dia === 3){
    console.log('Miercoles')
} else if (dia === 4){
    console.log('Jueves')
} else if (dia === 5){
    console.log('Viernes')
} else if (dia === 6){
    console.log('Sabado')
} else {
    console.log('No es un dia')
}


//Switch - case para preguntas con una variable

/* 
switch(variable a evaluar){
    caso valor:
        -codigo a ejecutar
    break;
    caso valor:
        -codigo a ejecutar
    break;
    caso valor:
        -codigo a ejecutar
    break;
    default:
        -codigo a ejecutar si sale de las opciones
    break;
}
*/

switch (dia){
    case 0:
        console.log('Domingo');
    break;
    case 1:
        console.log('Lunes');
    break;
    case 2:
        console.log('Martes');
    break;
    case 3:
        console.log('Miercoles');
    break;
    case 4:
        console.log('Jueves');
    break;
    case 5:
        console.log('Viernes');
    break;
    case 6:
        console.log('Sabado');
    break;
    default:
        console.log('No es un dia');
    break;
}

let cuponesDescuento = 'Platino';
let descuento;

switch (cuponesDescuento){
    case 'Bronce':
        descuento = 5;
    break;
    case 'Plata':
        descuento = 10;
    break;
    case 'Oro':
        descuento = 15;
    break;
    default:
        console.log('Cupon erroneo');
        break;
}

console.log(`Tu desceunto es de ${descuento}%`)