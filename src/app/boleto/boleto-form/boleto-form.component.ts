import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-boleto-form',
  templateUrl: './boleto-form.component.html',
  styleUrls: ['./boleto-form.component.css']
})
export class BoletoFormComponent {

  onSubmit(f: NgForm) {
    console.log(f.value)
  }

  cancela() {

  }
}
