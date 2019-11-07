import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DatosBasicosService {

  public apiUrl = "https://dappapache02.eastus.cloudapp.azure.com/middleware2-copy/api/v2/";

  constructor(public http:HttpClient) { }


  getDatosBasicos(patientid){

    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});

    return this.http.get(this.apiUrl + `ebooking/datos-paciente-contacto?patientid=${patientid}`, {headers}).pipe(
                    map((resp:any) =>{
                      return resp
                    })
    )
  }

  getDoagnosticoEmbarazo(patientid){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});

    return this.http.get(this.apiUrl + `ebooking/solo-diagnostico-embarazo-actual-contacto?patientid=${patientid}`, {headers}).pipe(
      map((resp:any) =>{
        return resp
      })
)

  }
}
