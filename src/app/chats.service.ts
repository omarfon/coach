import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import {map } from 'rxjs/operators';
import { message, mynote } from './models/message';
import { firestore } from 'firebase';
import { Observable } from 'rxjs';


export interface chat {
  description:string
  name: string
  id: string
  img: string
}


@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(public db: AngularFirestore,
              public ad: AngularFireAuth) { 

  }

  getChatRooms(){
    return this.db.collection('chatsRooms').snapshotChanges().pipe(map(users =>{
      return users.map(a =>{
        const data = a.payload.doc.data() as chat;
        data.id = a.payload.doc.id;
        return data;
      })
      console.log('rooms:', users);
    }));
  }
  
  getChatRoom( chat_id: string){
      return this.db.collection('chatsRooms').doc(chat_id).valueChanges()
  }

  sendMessageToFirebase(message: message, chat_id: string){
    this.db.collection('chatsRooms').doc(chat_id).update({
      messages: firestore.FieldValue.arrayUnion(message),
    })
  }

  sendNote( note: mynote, chat_id: string){
    this.db.collection('chatsRooms').doc(chat_id).update({
      notes: firestore.FieldValue.arrayUnion(note),
    })
  }

  loginEmailUser(email, password){
    return new Promise((resolve, reject)=>{
      this.ad.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData)),
      err => (reject(err));
    });
  }

  loginWithToken(token){
    return new Promise((resolve, reject)=>{
      this.ad.auth.signInWithCustomToken(token)
      .then(userData => resolve(userData)),
      err => (reject(err));
    });
  }

 sendDataBasic(){
  const id = localStorage.getItem('id');
  const uid = localStorage.getItem('uid');
  const email = localStorage.getItem('email');

  this.db.collection('coaches').doc(uid).set({
   name: localStorage.getItem('name'),
   uid: uid,
   role: "user",
   fcmTokens:"",
   data:
   {
     email: email,
    }
  },{merge:true})
  .catch(err =>{
    console.log(err, 'error de no escritura');
  })
 }


 registerToken(token, uid){
  this.db.collection('coaches').doc(uid).update({
    fcmTokens:firestore.FieldValue.arrayUnion(token),
  })
 }


}
