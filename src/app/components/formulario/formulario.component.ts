import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CitaService } from 'src/app/services/cita.service';
import { Cita } from '../../models/cita.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nuevaCita: Cita = new Cita();
  @Output() enviarCita: EventEmitter<Cita> = new EventEmitter();
  constructor(private _cita: CitaService) { }

  ngOnInit(): void {
  }
  
  guardarCita(): void {
    this._cita.agregarCita(this.nuevaCita);
    this.nuevaCita = new Cita();
  }

}
