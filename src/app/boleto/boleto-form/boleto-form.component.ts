import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-boleto-form',
  templateUrl: './boleto-form.component.html',
  styleUrls: ['./boleto-form.component.css']
})
export class BoletoFormComponent {

  constructor(private router: Router) {
  }
  onSubmit(f: NgForm) {
    console.log(f.value)
  }

  cancela() {
    this.router.navigate(['/home/boleto'])
  }
}
