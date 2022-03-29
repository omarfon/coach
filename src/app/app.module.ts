import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth'
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//constantes

import { ServiceWorkerModule } from '@angular/service-worker';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
            IonicModule.forRoot(),
            AngularFireModule.initializeApp(environment.firebase),
            AngularFireAuthModule,
            AngularFirestoreModule,
            AngularFireMessagingModule, 
            HttpClientModule,
            AppRoutingModule,
            MaterialModule,
            ServiceWorkerModule.register('combined-sw.js', { enabled: environment.production }),
            BrowserAnimationsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
