import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoletoRoutingModule } from './boleto-routing.module';
import { BoletoFormComponent } from './boleto-form/boleto-form.component';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {PaginatorModule} from "primeng/paginator";


@NgModule({
  declarations: [
    BoletoFormComponent
  ],
  imports: [
    CommonModule,
    BoletoRoutingModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    PaginatorModule
  ]
})
export class BoletoModule { }
