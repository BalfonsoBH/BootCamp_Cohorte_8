let $titulo = document.querySelector('#titulo');
let $mensaje = document.querySelector('#mensaje');
let $btn = document.querySelector('#btn');
let $spanError = document.querySelector('span');

$btn.addEventListener('click', () => {
    console.log('estate quieto');
});

$mensaje.addEventListener('keydown', (e) => {
    /* console.log('Escribiste algo'); */
    /* console.log(e); */
    console.log(e.target.value)

    if (e.target.value.length < 3) {
        $spanError.classList.remove('hide');
        $spanError.classList.add('error');
    } else {
        $spanError.classList.add('hide');
        $spanError.classList.remove('error');
    }
});