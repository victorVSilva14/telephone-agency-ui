import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoListComponent } from './contato-list/contato-list.component';
import { UtilModule } from '../util/util.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ConfirmDialogDeleteComponent } from './confirm-dialog-delete/confirm-dialog-delete.component'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ContatoListComponent,
    ConfirmDialogDeleteComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    UtilModule
  ],
  entryComponents: [ConfirmDialogDeleteComponent]
})
export class ContatoModule { }
