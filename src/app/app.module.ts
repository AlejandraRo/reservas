import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importar modulo de formularios
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ReservasuserComponent } from './components/reservasuser/reservasuser.component';
import { ReservasadminComponent } from './components/reservasadmin/reservasadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ReservasuserComponent,
    ReservasadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
