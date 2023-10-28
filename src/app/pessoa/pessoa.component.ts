import {Component, OnInit} from '@angular/core';
import {PessoaService} from "../service/pessoa.service";
import {Pessoa} from "../model/pessoa";


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit{
  pessoas: Array<Pessoa> = [];
  displayedColumns: string[] = ['id', 'nome', 'valorLimiteBoletos', 'acoes'];
  constructor(private service: PessoaService) {}

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    return this.service.list().subscribe(res =>{
      this.pessoas = res;
    });
  }

  apagarPessoa(id: number) {
    console.log(id);
    this.service.deletar(id).subscribe(resposta => {
      this.pessoas.push(resposta);
    });
    this.carregaLista();
  }
}

