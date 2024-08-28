import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/contato.resource';
import { ConfirmDialogDeleteComponent } from '../confirm-dialog-delete/confirm-dialog-delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css']
})
export class ContatoListComponent implements OnInit {
  displayedColumns: string[] = ['snFavorito', 'nome', 'email', 'celular', 'telefone', 'dhCad', 'snAtivo', 'editar', 'excluir'];
  dataSource: Contato[] = [
    {
      id: 1,
      nome: 'João Silva',
      email: 'joao.silva@example.com',
      celular: '123456789',
      telefone: '987654321',
      snFavorito: false,
      snAtivo: false,
      dhCad: new Date()
    },
    {
      id: 2,
      nome: 'João Silva',
      email: 'joao.silva@example.com',
      celular: '123456789',
      telefone: '987654321',
      snFavorito: true,
      snAtivo: true,
      dhCad: new Date()
    },
    {
      id: 3,
      nome: 'João Silva',
      email: 'joao.silva@example.com',
      celular: '123456789',
      telefone: '987654321',
      snFavorito: true,
      snAtivo: true,
      dhCad: new Date()
    },
    {
      id: 4,
      nome: 'João Silva',
      email: 'joao.silva@example.com',
      celular: '123456789',
      telefone: '987654321',
      snFavorito: true,
      snAtivo: true,
      dhCad: new Date()
    },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogDeleteComponent, {
      width: '370px', 
      height: '180px', 
      maxWidth: '90vw', 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Item excluído');
      } else {
        console.log('Exclusão cancelada');
      }
    });
  }
}
