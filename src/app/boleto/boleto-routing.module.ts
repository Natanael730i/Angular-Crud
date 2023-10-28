import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoletoFormComponent} from "./boleto-form/boleto-form.component";

const routes: Routes = [
  {path: 'boletoform', component: BoletoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoletoRoutingModule { }
