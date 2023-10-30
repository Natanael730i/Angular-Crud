import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pessoa} from "../model/pessoa";
import {delay, first} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private API = 'http://localhost:8080/pessoa/';
  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Pessoa[]>(this.API + 'list')
      .pipe(
        first(),
        delay(100)
      );
  }

  save(pessoa: Pessoa) {
    return this.http.post(this.API + 'create', pessoa)
  }

  deletar(id: number) {
    return this.http.delete<void>(this.API + 'delete/' + id);
  }

  alter(pessoa: Pessoa) {
    return this.http.put(this.API + 'alter/' + pessoa.id, pessoa)
  }

  findById(id: number) {
    return this.http.get<Pessoa>(this.API + id)
  }
}
