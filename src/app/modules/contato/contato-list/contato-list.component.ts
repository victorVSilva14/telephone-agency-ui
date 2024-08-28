import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/contato.resource';
import { ConfirmDialogDeleteComponent } from '../confirm-dialog-delete/confirm-dialog-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { ContatoComponent } from '../contato-form/contato.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css']
})
export class ContatoListComponent implements OnInit {
  displayedColumns: string[] = ['snFavorito', 'nome', 'email', 'celular', 'telefone', 'dhCad', 'snAtivo', 'editar', 'excluir'];
  listaContatos = new MatTableDataSource<Contato>([
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
  ]);

  constructor(
    private dialog: MatDialog,
    // private contatoService: ContatoService,
    // private toastyService: ToastyService
  ) { }

  ngOnInit(): void {
  }

  openConfirmDialog(contato: Contato): void {
    const dialogRef = this.dialog.open(ConfirmDialogDeleteComponent, {
      width: '370px', 
      height: '180px', 
      maxWidth: '90vw', 
      data: { contato }
    });

    dialogRef.afterClosed().subscribe(contatoExcluir => {
      if (contatoExcluir) {
        this.removeContato(contatoExcluir);
        console.log('Contato excluido: ', contatoExcluir);
        // this.toastyService.success("Contato excluido com sucesso");
      }
    });
  }

  removeContato(contato: Contato): void {
    const index = this.listaContatos.data.findIndex(c => c.id === contato.id);
    if (index >= 0) {
      this.listaContatos.data.splice(index, 1);
      this.listaContatos._updateChangeSubscription();
    }
  }

  openDialogEdit(contato: Contato): void {
    const dialogRef = this.dialog.open(ContatoComponent, {
      width: '30vw', 
      height: '62vh',
      data: { contato }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Item editado');
      } else {
        console.log('Edição cancelada');
      }
    });
  }
  
  openDialogContato() {
    const dialogRef = this.dialog.open(ContatoComponent, {
      width: '30vw', 
      height: '62vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Contato adicionado');
      } else {
        console.log('Cadastro cancelado');
      }
    });
  }

  favoritarContato(contato: Contato) {
    contato.snFavorito = !contato.snFavorito;
    // this.contatoService.update(contato).subscribe((res) => {
    //   this.toastyService.success("Contato favoritado com sucesso");
    // }).catch((err) => this.toastyService.error(err));
  }
}
