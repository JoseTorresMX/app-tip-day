import { Injectable } from '@angular/core';
//importamos los modulos
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdviceServiceService {
  private apiUrl='http://api.adviceslip.com/advice';
  constructor(private http:HttpClient) { }
  getAdvice():Observable<any>{
    return this.http.get<any>(this.apiUrl);  //Obtenemos la sugerencia de consejos de la API
  }
}
