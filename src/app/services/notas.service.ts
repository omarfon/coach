import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_ENDPOINT } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(public http: HttpClient) { }

  public SERVER = API_ENDPOINT;

  public apiUrl = `${this.SERVER}`;

  getNotas(patientid, fechaIni, fechaFin){

    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});

    return this.http.get(this.apiUrl + `ebooking/diagnostico-embarazo-actual-contacto?patientid=${patientid}&fechaIni=${fechaIni}&fechaFin=${fechaFin}`, {headers}).pipe(
                    map((resp:any) =>{
                      return resp
                    })
                  )
                }
                
}
