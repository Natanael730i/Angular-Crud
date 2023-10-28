import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaComponent } from './pessoa.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    PessoaComponent,
    PessoaFormComponent
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    InputTextModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
  ]
})
export class PessoaModule { }
