/* 
Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
 cupón equivocado

*/

/* let precio = parseInt(prompt('Escribe el precio de tu producto'));
let cuponesDescuento = prompt('Escribe el cupon');
let descuento;
let indicio = true;

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
    case 'Platino':
        descuento = 20;
    break;
    default:
        indicio = false;
        break;
}

function descuentof(descuento, precio) {
     let descuentof =(descuento * precio)/ 100;
     return precio - descuentof
}
if (precio == Number && indicio === true) {
    alert (`Tienes un descuento de ${descuento}% y 
tu precio final es de ${descuentof(descuento, precio)}`);
} else if (indicio === false && precio !== Number) {
    alert('Cupon y precio incorrecto');
} else if (indicio === false) {
    alert('Cupon incorrecto');
} else {
    alert('precio incorrecto');
} */



 
var getCupon = () => {
    if(isNaN(document.getElementById("precio").value)){
        document.getElementById("respuesta").innerHTML = `Eso no es un numero`;   
    }else{
        let precio = parseInt(document.getElementById("precio").value);
        let cupon = document.getElementById("cupon");
        switch (cupon.value) {
            case "Bronce":
                total = precio * 0.95;
                document.getElementById("respuesta").innerHTML = `${total}`;
                break;
            case "Plata":
                total = precio * 0.90;
                document.getElementById("respuesta").innerHTML = `${total}`;
                break;
            case "Oro":
                total = precio * 0.80;
                document.getElementById("respuesta").innerHTML = `${total}`;
                break;
            case "Platino":
                total = precio * 0.75;
                document.getElementById("respuesta").innerHTML = `${total}`;
                break;
            default:
                document.getElementById("respuesta").innerHTML = `Cupon no valido`;
                break;
        }
    }
}

let total;


