/* let $titulo = document.getElementById('titulo');
console.log(titulo.textContent);
titulo.textContent = 'Titulo escrito desde JS'
 */
/* Trae el primer elemento que encuentre #id  */
let $titulo = document.querySelector('#titulo');
titulo.textContent = 'Titulo desde JS com querySelector'

let $parrafo = document.querySelector('p');
console.log($parrafo);

let $parrafos = document.querySelectorAll('p');
console.log($parrafos[1].textContent);

let subtitulo = document.createElement('h3');
subtitulo.textContent = 'Este es un subtitulo desde JS con createElement';
//agrega elemnto al final del body
$titulo.insertAdjacentElement('afterEnd',subtitulo)
$titulo.remove();


console.log(hola)
//no usar

let $contenido = document.querySelector('#contenido')
/* console.log($contenido.innerHTML = '<br>');
console.log($contenido.outerHTML = 'hola'); */

let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo parrafo';
$contenido.appendChild(contenidoParrafo);