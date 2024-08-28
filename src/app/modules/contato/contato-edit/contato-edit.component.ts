import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contato } from 'src/app/models/contato.resource';

@Component({
  selector: 'app-contato-edit',
  templateUrl: './contato-edit.component.html',
  styleUrls: ['./contato-edit.component.css']
})
export class ContatoEditComponent implements OnInit {

  public contatoForm!: FormGroup;
  private contato: Contato;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: { contato: Contato }
  ) { 
    this.contato = data.contato;
  }

  ngOnInit(): void {
      this.buildForm();
  }
  
  public onSubmit() {

  }

  private buildForm() {
    this.contatoForm = this.fb.group({
      id: [this.contato.id],
      nome: [this.contato.nome],
      email: [this.contato.email],
      celular: [this.contato.celular],
      telefone: [this.contato.telefone],
      dhCad: [this.contato.dhCad],
      snAtivo: [this.contato.snAtivo]
    });
  }
}
