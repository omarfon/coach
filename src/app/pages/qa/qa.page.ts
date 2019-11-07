import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.page.html',
  styleUrls: ['./qa.page.scss'],
})
export class QaPage implements OnInit {

  public qaDates;
  public qaCategories;
  public _qaCategories;

  constructor(public alert: AlertController,
              public notes: NotesService) { }

  ngOnInit() {

    this.notes.getNotesForCategory().subscribe(data =>{
      this.qaCategories = data;
      this._qaCategories = data;
      console.log(this.qaCategories);
      console.log('_qaCategories', this._qaCategories);
    });
  }

  qaDetail(q){
    console.log('q', q);
    this.qaDates = q;
  }

  openPopoverDataCoach(){
    console.log('mostrar data claudia');
  }

  initializeItems():void {
    this.qaCategories = this._qaCategories;
  }


  searchData(){
    /* const searchTerm = evt.srcElement.value;
    if(!searchTerm){
      return
    }
    this.goalList = this.goalList.filter(currentGoal =>{
      if(currentGoal.datos.nombre && searchTerm){
        if(currentGoal.datos.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    }); */
  }


}
