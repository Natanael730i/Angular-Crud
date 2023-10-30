import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PessoaFormComponent} from './pessoa-form/pessoa-form.component';

const routes: Routes = [
  {path: 'pessoaform', component: PessoaFormComponent},
  {path: 'pessoaform/:id', component: PessoaFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
