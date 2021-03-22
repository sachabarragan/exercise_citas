export class Cita {
    nombre: string;
    fecha: string;
    hora: string;
    sintomas: string;

    constructor(pNombre = 'Ingrese su nombre', pFecha = '', pHora = '', pSintomas = 'Ingrese los síntomas'){
        this.nombre = pNombre;
        this.fecha = pFecha;
        this.hora = pHora;
        this.sintomas = pSintomas;
    }

}