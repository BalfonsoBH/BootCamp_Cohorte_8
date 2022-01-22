let $btnGato = document.querySelector('#btn-cat')

$btnGato.addEventListener('click', () => {
    
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(resp => resp.json()).then(data => {
            console.log(data);

            let imgGato = document.createElement('img');
            imgGato.src = data[0].url;
            document.body.appendChild(imgGato);
        })

});