let $titulo = document.querySelector('#titulo');
let $texto = document.querySelector('.texto');
$texto.id = 'texto';
/* $texto.style = 'color: red; font-size: 24px'; */
$texto.className= 'bg-purple h3' //remplaza
$texto.classList.add('text-center'); //agrega o remueve
$texto.classList.remove('bg-purple');