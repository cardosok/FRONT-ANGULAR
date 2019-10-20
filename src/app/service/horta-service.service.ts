import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { Horta } from '../model/horta';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HortaServiceService {
  private baseUrl: string = 'http://localhost:3000/';
  horta: Horta;
  private parans: HttpParams;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get( this.baseUrl, {headers: this.headers});
  }

  getFindByData(dataInicial,dataFinal): Observable<any> {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    let Json = {'Data_Inicial': dataInicial, 'Data_Final': dataFinal}
    return this.http.post(this.baseUrl + 'data', JSON.stringify(Json), {headers: this.headers});
  }

}
