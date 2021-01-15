import { TokenError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service'
import { FlightService } from '../_services/flight.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-flight-reservation',
  templateUrl: './flight-reservation.component.html',
  styleUrls: ['./flight-reservation.component.css']
})
export class FlightReservationComponent implements OnInit {
  isReserved = false;
  isLoggedIn = false;
  content?: any; 

  constructor(private tokenStorage: TokenStorageService, private flightService: FlightService) { }
    useremail: string='';
    flightId: number=0;
    cost: number=170;

  ngOnInit(): void {
    if(this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.useremail = this.tokenStorage.getUser().email;
    }
    this.flightService.getFlightList().subscribe(
      data => {
         this.content = data.Flight
      },
      err => {
        this.content = JSON.parse(err.error).message;
      } 
    );
    
  }
  ngOnDestroy(): void {
    this.isReserved == false;
  }
  
  submitReservation(flightid: number, cost: number): void{
    this.flightId = flightid;
    this.flightService.postFlightReservation(this.useremail,this.flightId,this.cost).subscribe();
    this.isReserved = true;
  }
}
