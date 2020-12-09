import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightReservationComponent } from './flight-reservation/flight-reservation.component';
import { AlreadyReservedComponent } from './already-reserved/already-reserved.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path : 'register', component: RegisterComponent},
  {path : 'login', component: LoginComponent},
  {path : 'profile', component: ProfileComponent},
  {path : 'flight-list', component: FlightListComponent},
  {path : 'flight-reservation', component: FlightReservationComponent},
  {path : 'already-reserved', component: AlreadyReservedComponent},
  {path : '', component: WelcomeComponent},
  {path : '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
