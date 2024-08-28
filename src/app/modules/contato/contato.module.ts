import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoListComponent } from './contato-list/contato-list.component';
import { UtilModule } from '../util/util.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'; 



@NgModule({
  declarations: [
    ContatoListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    UtilModule
  ]
})
export class ContatoModule { }
