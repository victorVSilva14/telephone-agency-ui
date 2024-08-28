import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contato } from 'src/app/models/contato.resource';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  public contatoForm!: FormGroup;
  private contato: Contato | null;
  public isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: { contato: Contato }
  ) { 
    this.contato = data ? data.contato : null;
  }

  ngOnInit(): void {
    this.isEditMode = !!this.contato;
    this.buildForm();
  }
  
  public onSubmit() {

  }

  private buildForm() {
    this.contatoForm = this.fb.group({
      id: [this.contato ? this.contato.id : ''],
      nome: [this.contato ? this.contato.nome : '', [Validators.required]],
      email: [this.contato ? this.contato.email : '', [Validators.required]],
      celular: [this.contato ? this.contato.celular : '', [Validators.required]],
      telefone: [this.contato ? this.contato.telefone : '', [Validators.required]],
      dhCad: [this.contato ? this.contato.dhCad : '', [Validators.required]],
      snAtivo: [this.contato ? this.contato.snAtivo : '', [Validators.required]]
    });
  }
}
