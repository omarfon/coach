import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

import { HomePage } from './home.page';
import { ComponentsModule } from '../components/components.module';
import { DatoscitasComponent } from '../components/datoscitas/datoscitas.component';
import { DatosclaudiaComponent } from '../components/datosclaudia/datosclaudia.component';
import { NoteComponent } from '../components/note/note.component';
import { DatosPacienteComponent } from '../components/datos-paciente/datos-paciente.component';
import { SeeNotesComponent } from '../components/see-notes/see-notes.component';
import { SeeDaysComponent } from '../components/see-days/see-days.component';
import { BagdesComponent } from '../components/bagdes/bagdes.component';



@NgModule({
  entryComponents:[
 DatoscitasComponent,
    DatosclaudiaComponent,
    DatosPacienteComponent,
    NoteComponent,
    SeeNotesComponent,
    SeeDaysComponent,
    BagdesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
