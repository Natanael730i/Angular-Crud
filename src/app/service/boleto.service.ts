import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Boleto} from "../model/boleto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoletoService {
  private API = 'http://localhost:8080/boleto/';
  constructor(private http: HttpClient) { }

  save(boleto:Boleto){
    return this.http.post(this.API + 'create', boleto)
  }
  list():Observable<Boleto[]>{
    return this.http.get<Boleto[]>(this.API + 'list');
  }
}
