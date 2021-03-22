import { Component, OnInit } from '@angular/core';
import { Cita } from '../../models/cita.model';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  todasLasCitas: Cita[] = [];

  constructor(private _cita: CitaService) { 
    this.todasLasCitas = this._cita.arrCitas;
  }

  ngOnInit(): void {
  }

  borrarCita(i): void {
    this._cita.eliminarCita(i);
  }

}
