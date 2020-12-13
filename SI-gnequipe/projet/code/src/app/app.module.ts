import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightReservationComponent } from './flight-reservation/flight-reservation.component';
import { AlreadyReservedComponent } from './already-reserved/already-reserved.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatListModule } from '@angular/material/list'; 

import { AuthInterceptorProviders } from './_helpers/auth.interceptor';
import { LoggedoutComponent } from './loggedout/loggedout.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    FlightReservationComponent,
    AlreadyReservedComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    LoggedoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
