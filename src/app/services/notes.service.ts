import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public SERVER ="https://dappapache02.eastus.cloudapp.azure.com/middleware2-copy/api/v2/mama/faq?&groupby=categoria&asarray=1";
  apiUrl = `${this.SERVER}mama/faq?groupby=categoria`
  apiUrl2 = `${this.SERVER}mama`

  constructor( private http:HttpClient) { }

  getNotesForCategory(){
    return this.http.get(this.apiUrl).pipe(
      map((resp:any)=>{
        return resp
      })
    )
  }

  getAllNotes(){
    return this.http.get(this.apiUrl2).pipe(
      map((resp:any)=>{
        return resp
      })
    )
  }

}
