import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //es un tipo de dato
import { Observable } from 'rxjs';
//Hacemos la peticion al recurso (en este caso un json)
const jsonOfertaUrl = 'assets/json/ofertas.json';

@Injectable()
export class DataService {


    constructor(private http: HttpClient) { } //creo un dato llamado 'http' del tipo 'HttpClient'

    //funcion que devuelve un Observable<Object>
    fetchOfertaEducativa(): Observable<Object> {
        return this.http.get(jsonOfertaUrl);
    }
}