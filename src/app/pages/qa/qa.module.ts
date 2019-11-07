import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QaPage } from './qa.page';
import { MaterialModule } from 'src/app/material.module';


const routes: Routes = [
  {
    path: '',
    component: QaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [QaPage]
})
export class QaPageModule {}
