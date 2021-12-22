var compra = parseInt(prompt('Ingresa el monto'));



function precioFinal(compra){
    if (compra < 100){
        descuentoAplicado = compra * 0.9;
    }else if (compra>=100 && compra<200){
        descuentoAplicado = compra * 0.8;
    }else if(compra >= 200){
        descuentoAplicado = compra * 0.7;
    }
    document.write('<h1> El total a pagar ya contando es descuento es de $' + descuentoAplicado + ' pesos</h1>')
}

precioFinal(compra);
