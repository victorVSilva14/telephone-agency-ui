import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contato } from 'src/app/models/contato.resource';

@Component({
  selector: 'app-confirm-dialog-delete',
  templateUrl: './confirm-dialog-delete.component.html',
  styleUrls: ['./confirm-dialog-delete.component.css']
})
export class ConfirmDialogDeleteComponent {

  private contato: Contato;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) data: { contato: Contato }
  ) {
    this.contato = data.contato;
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(this.contato);
  }
}
