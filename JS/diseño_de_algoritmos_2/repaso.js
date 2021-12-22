

function preocesadordeFrutas (manzana, naranja) {
    let jugo = 'jugo de ' + manzana + 'manzanas y ' + 
    naranja + ' naranjas.';
    return jugo;  /* return devuelve el valor que va a ser usado cuando se llame la función */
}

let jugoDemanzana = preocesadordeFrutas(4,0);
console.log (jugoDemanzana);