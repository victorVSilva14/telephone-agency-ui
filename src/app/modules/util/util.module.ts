import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MenuSuperiorComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [MenuSuperiorComponent]
})
export class UtilModule { }