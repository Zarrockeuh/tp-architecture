import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightReservationComponent } from './flight-reservation/flight-reservation.component';
import { AlreadyReservedComponent } from './already-reserved/already-reserved.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    FlightReservationComponent,
    AlreadyReservedComponent,
    PageNotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'flight-list', component:
    FlightListComponent},
      {path: 'flight-reservation', component:
      FlightReservationComponent},
      {path: 'already-reserved', component:
    AlreadyReservedComponent},
      {path: '', component:
    WelcomeComponent},
      {path: '**', component:
      PageNotFoundComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
