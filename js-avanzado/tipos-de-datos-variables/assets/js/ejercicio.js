let edadi = prompt('Ingresa tu edad');
ejercicio = {
    año:2022,
    edad:parseInt(edadi)
};
function operacion () {
    return (ejercicio.año) - (edadi);   
};

alert('naciste en el año ' + operacion ());
