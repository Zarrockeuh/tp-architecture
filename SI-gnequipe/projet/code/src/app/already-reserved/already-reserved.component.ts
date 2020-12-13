import { Component, OnInit } from '@angular/core';
import { FlightService } from '../_services/flight.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-already-reserved',
  templateUrl: './already-reserved.component.html',
  styleUrls: ['./already-reserved.component.css']
})
export class AlreadyReservedComponent implements OnInit {

  content?: any;
  displayContent?: any;
  useremail?: string;
  isLoggedIn = false;
  constructor(private tokenStorage: TokenStorageService, private flightService: FlightService ) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()) {
      this.useremail = this.tokenStorage.getUser().email;
      this.isLoggedIn = true;
    }
    this.flightService.getAlreadyReserved().subscribe(
      data => {
        this.content = data.reservation;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    )
    }

}
