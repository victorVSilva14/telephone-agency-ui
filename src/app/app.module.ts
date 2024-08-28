import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { UtilModule } from './modules/util/util.module';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './services/auth.service';
import { ContatoModule } from './modules/contato/contato.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    UtilModule, 
    ContatoModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
