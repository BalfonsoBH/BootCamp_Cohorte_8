/* 
Buenos dias 6 - 11
Buenas tardes 12 - 18
Buenas noches 19 - 23
Dejame dormir 0 - 5
*/

let hora = parseInt(prompt('Escribe la hora'));

/* if (hora >= 6 && hora <= 11 ) {
    alert('Buenos dias')
} else if (hora >= 12 && hora <= 18 ) {
    alert('Buenos tardes')
} else if (hora >= 19 && hora <= 23 ) {
    alert('Buenas noches')
} else if (hora >= 0 && hora <= 5 ) {
    alert('Deja dormir')
} else {
    alert('Opcion invalida')
} */

if (hora == float || hora > 23) {
    alert('Opcion invalida')
} else if (hora >= 6 && hora <= 11 ) {
    alert('Buenos dias')
} else if (hora >= 12 && hora <= 18 ) {
    alert('Buenos tardes')
} else if (hora >= 19 && hora <= 23 ) {
    alert('Buenas noches')
} else if (hora >= 0 && hora <= 5 ) {
    alert('Deja dormir')
} else {
    alert('Opcion invalida')
}