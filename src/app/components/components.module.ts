import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import { QadateComponent } from './qadate/qadate.component';
import { DatoscitasComponent } from './datoscitas/datoscitas.component';
import { DatosclaudiaComponent } from './datosclaudia/datosclaudia.component';
import { DatosPacienteComponent } from './datos-paciente/datos-paciente.component';
import { SeeNotesComponent } from './see-notes/see-notes.component';
import { SeeDaysComponent } from './see-days/see-days.component';
import { BagdesComponent } from './bagdes/bagdes.component';


@NgModule({
    declarations:[NoteComponent, 
                  QadateComponent,
                  DatoscitasComponent,
                  DatosclaudiaComponent,
                  DatosPacienteComponent,
                  SeeNotesComponent,
                  SeeDaysComponent,
                  BagdesComponent],
    imports:[CommonModule],
    exports:[NoteComponent, 
             QadateComponent,
             DatoscitasComponent,
             DatosclaudiaComponent,
             DatosPacienteComponent,
             SeeNotesComponent,
             SeeDaysComponent,
             BagdesComponent],
    schemas:
            [CUSTOM_ELEMENTS_SCHEMA]

})

export class ComponentsModule {}
