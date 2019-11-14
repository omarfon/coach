import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-bagdes',
  templateUrl: './bagdes.component.html',
  styleUrls: ['./bagdes.component.scss'],
})
export class BagdesComponent implements OnInit {

  @Input ('badges') badges
  constructor(public nav: NavParams) { }

  ngOnInit() {
    this.badges = this.nav.get('badges');
    console.log('this.badges:', this.badges);
    console.log('this.badges filtrado:', this.badges[0].notification);
  }

}
