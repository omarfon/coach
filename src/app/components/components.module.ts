import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import { QadateComponent } from './qadate/qadate.component';
import { DatoscitasComponent } from './datoscitas/datoscitas.component';
import { DatosclaudiaComponent } from './datosclaudia/datosclaudia.component';
import { DatosPacienteComponent } from './datos-paciente/datos-paciente.component';


@NgModule({
    declarations:[NoteComponent, 
                  QadateComponent,
                  DatoscitasComponent,
                  DatosclaudiaComponent,
                  DatosPacienteComponent,],
    imports:[CommonModule],
    exports:[NoteComponent, 
             QadateComponent,
             DatoscitasComponent,
             DatosclaudiaComponent,
             DatosPacienteComponent],
    schemas:
            [CUSTOM_ELEMENTS_SCHEMA]

})

export class ComponentsModule {}
