import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsDialogComponent } from './components/errors-dialog/errors-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    ErrorsDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [ErrorsDialogComponent]
})
export class SharedModule { }
