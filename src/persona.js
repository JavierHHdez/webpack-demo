export default class Persona {

    constructor (nombre) {
        this.nombre = nombre
    }

    saluda () {
        console.log(`Hola!, mi nombre es ${this.nombre}`)
    }
}