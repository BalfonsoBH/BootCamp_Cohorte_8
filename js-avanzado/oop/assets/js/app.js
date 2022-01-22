class Animal {
    /* nombre = 'desconocido';
    especie = 'desconocido'; */
    //constructor es una funcion
    constructor(nombre, especie) {
        //this hace referencia al contexto en el que se utilizan 
        this.nombre = nombre;
        this.especie = especie;
    }

    //getters y setters
    //leer o modificar ( debe haber uno por cada atributo)
    get getNombre() {
        return this.nombre;
    }

    set setNombre(nombre) {
        this.nombre = nombre
    }
    
    get getEspecie() {
        return this.especie;
    }

    set setEspecie(especie) {
        this.especie = especie
    }

    //metodos = funcion
    presentarse() {
        document.write(`Hola, soy ${this.especie} y me llamo ${this.nombre} <br>`);
    }

    cambiarNombre(nuevoN) {
        this.nombre = nuevoN;
        let mensaje = `Mi nuevo nombres es ${this.nombre} y son un ${this.especie} <br>`;
        return mensaje;
    }

    //Metodo estatico
    //pertenece sólo a la clase y no se ehreda a los objetos
    static saludar() {
        return console.log('Metodo estatico');
    }

}

Animal.saludar();
/* Animal.presentarse(); */
/* console.log(Animal.getNombre); */


//heredan los atributos y los metodos de la clase
const Animal1 = new Animal('scooby', 'perro'); //creamos objeto
console.log(Animal1);

//instanciar = crear una copia, crear un objeto

const Animal2 = new Animal('miel', 'gato'); //creamos objeto
console.log(Animal2);

const Animal3 = new Animal(); //creamos objeto
console.log(Animal3);

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);

Animal1.nombre = 'Scrappy'
console.log(Animal1.nombre);

document.write(Animal1.cambiarNombre('oddie'));

//Getters y Setters
//get = obtener el valor de una variable
//set = fijar o cambiar el valor d eun atributo (variable)

console.log(Animal1.getNombre);
Animal1.setNombre = 'Manchas';
console.log(Animal1.getNombre);
console.log(Animal1);
