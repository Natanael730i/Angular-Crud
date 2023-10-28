import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {PessoaComponent} from '../pessoa/pessoa.component';
import {BoletoComponent} from "../boleto/boleto.component";
import {BoletoFormComponent} from "../boleto/boleto-form/boleto-form.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pessoa', component: PessoaComponent},
  {path: 'pessoaform', component: PessoaComponent},
  {path: 'boleto', component: BoletoComponent},
  {path: 'boletoform', component: BoletoFormComponent},
  {
    path: 'pessoa',
    loadChildren: () => import('../pessoa/pessoa.module').then(m => m.PessoaModule)
  },
  {
    path: 'boleto',
    loadChildren: () => import('../boleto/boleto.module').then(m => m.BoletoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
