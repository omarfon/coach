import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-datoscitas',
  templateUrl: './datoscitas.component.html',
  styleUrls: ['./datoscitas.component.scss'],
})
export class DatoscitasComponent implements OnInit {

  @Input ('nota') nota;
  

  constructor(public nav : NavParams) { }

  ngOnInit() {
    console.log('this.nota:', this.nota);
  }

}
