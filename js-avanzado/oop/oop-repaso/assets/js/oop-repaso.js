class Animalito {
    constructor(nombre, edad, especie, revisado) {
        this.nombre = nombre
        this.edad = edad
        this.especie = especie
        this.enfermo = false;
        this.revisado = revisado;
    }

    saludar() {
        return console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}

class Veterinario {
    constructor() {
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }

    agregarPaciente(paciente) {
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1;
        let mensaje = 'Paciente agregado <br>';
        return document.write(mensaje)
    }

    modificaPAcientesRevisados() {
        this.pacientesRevisados++;
    }

    revisarPaciente(paciente) {
        if(paciente.revisado === false) {
            paciente.revisado = true;
            this.modificaPAcientesRevisados();
           /*  this.pacientesRevisados++; */
            document.write('Paciente agregado y revisado <br>');
        } else {
            document.write('<br> Paciente ya revisado');
        }
    }

    mostrarLista(){
        for (let i = 0; i < this.listaPacientes.length; i++) {
            document.write(this.listaPacientes[i].nombre, ' ');
            
        }
        document.write(`<br> Cantidad de pacientes: ${this.cantidadPacientes} <br>
                        Pacientes revisados: ${this.pacientesRevisados} <br>`);
    }
}

const VeterinarioA = new Veterinario();

//Objetos creados de la clase Animalito
//Objeto 1
const Animalito1 = new Animalito('Gerardo', 4, 'perro', false);
console.log(Animalito1);

//Objeto 2
const Animalito2 = new Animalito('Che', 2, 'gato', true);
console.log(Animalito2);

VeterinarioA.agregarPaciente(Animalito1);
console.log(VeterinarioA.listaPacientes);

VeterinarioA.agregarPaciente(Animalito2);
console.log(VeterinarioA.listaPacientes);

VeterinarioA.mostrarLista();
VeterinarioA.revisarPaciente(Animalito1);
VeterinarioA.mostrarLista();

VeterinarioA.revisarPaciente(Animalito2);