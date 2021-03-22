import { Injectable } from '@angular/core';
import { Cita } from '../models/cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  citaNueva: Cita = new Cita();
  arrCitas: Cita[] = [];

  constructor() { }

  agregarCita(citaAGuardar: Cita): void{
    this.arrCitas.push(citaAGuardar);
    console.log(this.arrCitas);
  }

  eliminarCita(i: number): void{
    this.arrCitas.splice(i, 1);
  }
}
