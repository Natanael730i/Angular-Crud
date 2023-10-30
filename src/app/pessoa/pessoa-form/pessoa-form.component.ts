import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {PessoaService} from "../../service/pessoa.service";
import {Pessoa} from "../../model/pessoa";

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css'],
})
export class PessoaFormComponent implements OnInit {
  userId: number = 0;
  pessoa:Pessoa;
  form: FormGroup = this.formBuilder.group({
    id: new FormControl(0),
    nome: new FormControl(''),
    valorLimiteBoletos: new FormControl(0)
  });

  constructor(private router: Router,
              private activated: ActivatedRoute,
              private service: PessoaService,
              private formBuilder: FormBuilder) {
    this.activated.params.subscribe(value => {
      this.userId = value['id']
      if (this.userId == null) {
        this.userId = 0;
      }
      this.encontraPessoa(this.userId);
    });
  }

  onSubmit(form :FormGroup) {
    if (form.value.id === 0) {
      this.service.save(form.value);
    } else {
      this.service.alter(form.value);
    }
    this.router.navigate(['/home/pessoa']);
  }

  encontraPessoa(id: number) {
    this.service.findById(id).subscribe(resposta => {
      this.carregaPessoa(resposta);
    });
  }

  carregaPessoa(pessoa: Pessoa){
    this.form.patchValue({
      id: pessoa.id,
      nome: pessoa.nome,
      valorLimiteBoletos: pessoa.valorLimiteBoletos
    })
  }

  cancela() {
    this.router.navigate(['/home/pessoa']);
  }

  ngOnInit(): void {
    this.encontraPessoa(this.userId);
  }
}
