import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";
import {PessoaService} from "../../service/pessoa.service";

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css'],
})
export class PessoaFormComponent {
  message:String ='';
constructor(private router: Router,
            private service:PessoaService) {
}
  onSubmit(f: NgForm) {
    this.service.save(f.value).subscribe(resposta => {
      console.log(f.value)
      console.log(resposta)
      f.reset();
    });
  this.router.navigate(['/home/pessoa'])
  }

  cancela() {
    this.router.navigate(['/home/pessoa']);
  }
}
