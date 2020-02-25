import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';


@Component({
  selector: 'app-see-notes',
  templateUrl: './see-notes.component.html',
  styleUrls: ['./see-notes.component.scss'],
})
export class SeeNotesComponent implements OnInit {

  @Input ('notes') notes;
  constructor(public nav : NavParams) { }

  ngOnInit() {
    this.notes = this.nav.get('notes');
    console.log('this.notes', this.notes);
  }

}
