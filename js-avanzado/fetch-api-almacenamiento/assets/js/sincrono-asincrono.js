/*  codigo sincrono */

let variableSincrona;
variableSincrona = 10 * 3;
console.log(variableSincrona);

/* codigo asincrono */
let varialeAsincrona;

setTimeout(() => {
    varialeAsincrona = 10 * 3;
    console.log(varialeAsincrona);
}, 2000);

console.log(varialeAsincrona);