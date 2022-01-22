class Pokemon {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    atacar() {
        return console.log(`${this.nombre} está atacando`);
    }
}

class Pikachu extends Pokemon {
    constructor(nombre, tipo, edad){
        //referencia a constructor padre
        super(nombre, tipo)
        this.edad = edad;
    }
    //metodos
    evolucionar () {
        return console.log(`${this.nombre} está evolucionando`);
    }
}

class Electrico extends Pikachu {
    constructor(nombre, tipo, edad, color) {
        super (nombre, tipo, edad);
        this.color = color;
    }
}

const Electrico1 = new Electrico('Pancho', 'electrico', 3, 'color');
console.log(Electrico1);

const Pikachu1 = new Pikachu('Juan', 'Electrico', 3); //pertenece a la clase pikachu

console.log(Pikachu1);

Pikachu1.atacar();
Pikachu1.evolucionar();

const Pokemon1 = new Pokemon('Charmander', 'Fuego') //pertenece a la clase pokemon
Pokemon1.atacar();
/* Pokemon1.evolucionar(); */