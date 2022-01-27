const sumar = (numero1, numero2) => {
    return numero1 + numero2;
}                       
const restar = (numero1, numero2) => {
    return numero1 - numero2;
}
const multplicar = (numero1, numero2) => {
    return numero1 * numero2;
}
const dividir = (numero1, numero2) => {
    return numero1 / numero2;
}

const mostraresult = (operacion, numero1, numero2, resultado) => {
    const respuesta = document.createElement ('h3');
    respuesta.textContent = `La ${operacion} de ${numero1} y ${numero2} es ${resultado}`;
    document.body.appendChild(respuesta);
}

export {
    sumar, 
    restar, 
    multplicar, 
    dividir,
    mostraresult
}