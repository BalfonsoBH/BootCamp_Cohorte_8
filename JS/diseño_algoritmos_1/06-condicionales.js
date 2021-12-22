/* 
condicionales
se utilizan para tomar desiciones dentro del programa
*/

/* 
if(codigo) {
    codigo
    codigo
    codigo
}
*/

let edad = parseInt(prompt('Ingresa tu edad '));

if(edad >= 18 && edad <= 30) {
    document.write('eres un joven');
} else if (edad > 30 && edad < 60) {
    document.write('Eres un adulto');
} else if (edad >= 60) {
    document.write('eres un adulto mayor');
} else {
    document.write('eres un niño');
}