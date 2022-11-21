import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { ReservasadminComponent } from './components/reservasadmin/reservasadmin.component';
import { ReservasuserComponent } from './components/reservasuser/reservasuser.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  //rutas para renderizar los componentes
  {
    path:'reservas',
    component:ReservasuserComponent,
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'admin',
    component:ReservasadminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
