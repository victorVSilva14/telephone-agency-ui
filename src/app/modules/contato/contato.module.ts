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
import { ContatoEditComponent } from './contato-edit/contato-edit.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ContatoListComponent,
    ConfirmDialogDeleteComponent,
    ContatoEditComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
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
