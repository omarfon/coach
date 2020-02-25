import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-datos-paciente',
  templateUrl: './datos-paciente.component.html',
  styleUrls: ['./datos-paciente.component.scss'],
})
export class DatosPacienteComponent implements OnInit {

  @Input ('datosBasicos') datosBasicos

  constructor(public nav: NavParams) { }

  ngOnInit() {
    console.log('lo que llega de home ', this.datosBasicos);
  }

}
