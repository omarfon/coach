import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';


@Component({
  selector: 'app-see-days',
  templateUrl: './see-days.component.html',
  styleUrls: ['./see-days.component.scss'],
})
export class SeeDaysComponent implements OnInit {

  @Input('days') days;
  
  public opts = {
    slidesPerView: 2.1
  }
  constructor(public nav: NavParams) { }

  ngOnInit() {
    this.days = this.nav.get('days');
    console.log('this.days', this.days);
  }

}
