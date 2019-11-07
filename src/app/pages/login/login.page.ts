import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ChatsService } from '../../chats.service';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  public userResponse;
  public datos;

  constructor( private fb: FormBuilder,
               public routes: Router,
               public alertCtrl: AlertController,
               public chatSrv: ChatsService,
               public userSrv: UserService) {

 /*                const authorization = localStorage.getItem('authorizathion');
    if(authorization){
      this.userSrv.getKey().subscribe((data:any) =>{
        localStorage.setItem('authorization', data.authorization);
        localStorage.setItem('role', data.role);
        console.log(data);
      });
    } */
                }

  ngOnInit() {
    const authorization = localStorage.getItem('authorizathion');
    if(!authorization){
      this.userSrv.getKey().subscribe((data:any) =>{
        console.log(data);
        localStorage.setItem('authorization', data.authorization);
        localStorage.setItem('role', data.role);
      })
    }
  }

  onLogin(email, password){
   this.userSrv.doSignIn(email, password).subscribe((data:any)=>{
     this.userResponse = data;
     console.log('datos de login:', this.userResponse);
      localStorage.setItem('authorization', data.authorization);
      localStorage.setItem('role', data.role);
      localStorage.setItem('firebaseToken', data.firebaseToken);
      localStorage.setItem('name', data.name);
      localStorage.setItem('surname1', data.surname1);
      localStorage.setItem('photoUrl', data.photoUrl);
      localStorage.setItem('userEmail', data.userEmail);
      const token = data.firebaseToken;
      if(token){
        this.chatSrv.loginWithToken(token).then((result:any) =>{
          console.log(result);
          localStorage.setItem('uid', result.user.uid );
          const uid = localStorage.getItem('uid');
          if(uid){
            this.chatSrv.sendDataBasic();
          }
          this.routes.navigate(['home']);
        });
      }
   }, async err =>{
     const alert = await this.alertCtrl.create({
       header:'Error de credenciales',
       subHeader:'has ingresado mal el password o la contraseña, intenta de nuevo',
       buttons:[
         {
           text:'intentar',
           role:'cancel'
         }
       ]
     });
      await alert.present();
     console.log('erro', err)
   });
  }   


}
