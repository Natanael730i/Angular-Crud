import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PessoaService} from "../service/pessoa.service";
import {Pessoa} from "../model/pessoa";
import {catchError, Observable, of} from "rxjs";
import {ErrorsDialogComponent} from "../shared/components/errors-dialog/errors-dialog.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  @Input() pessoas$: Observable<Pessoa[]>;
  @Output() edit = new EventEmitter(false)
  displayedColumns: string[] = ['id', 'nome', 'valorLimiteBoletos', 'acoes'];

  constructor(private service: PessoaService,
              private dialog: MatDialog) {
    this.pessoas$ = this.carregaLista();
  }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    return this.service.list().pipe(
      catchError(error =>{
        this.openDialog(error.message)
        return of([]);
      })
    );
  }

  openDialog(error:string) {
    this.dialog.open(ErrorsDialogComponent, {
      data: error
    });
  }

  apagarPessoa(id: number) {
    return this.service.deletar(id);
  }
}

