let title = document.getElementById('title');

console.log(title);

title.textContent = 'Este es un texto escrito desde JS';

let parrafos = document.getElementsByTagName('p');
console.log(parrafos);

/* parrafos[0].textContent = 'parrafos escritos desde JS'

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = 'parrafo ' + i + ' escrito desde JS'
} */

let email = document.getElementById('email');
let password = document.getElementById('password');

function getInformation() {
    console.log(email.value);
    console.log(password.value);
}