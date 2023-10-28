import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pessoa} from "../model/pessoa";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private API = 'http://localhost:8080/pessoa/';
  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Array<Pessoa>>(this.API + 'list');
  }

  save(pessoa: Pessoa) {
    return this.http.post(this.API + 'create', pessoa)
  }

  deletar(id: any) {
    return this.http.delete<any>(this.API + 'delete/' + id)
  }
}
