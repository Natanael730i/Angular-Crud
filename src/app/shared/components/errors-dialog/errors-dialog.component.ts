import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {PessoaComponent} from "../../../pessoa/pessoa.component";

@Component({
  selector: 'app-errors-dialog',
  templateUrl: './errors-dialog.component.html',
  styleUrls: ['./errors-dialog.component.css']
})
export class ErrorsDialogComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: PessoaComponent) {}

  ngOnInit(): void {
  }
}
