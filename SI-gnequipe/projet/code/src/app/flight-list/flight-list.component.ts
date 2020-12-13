import { Component, OnInit } from '@angular/core';
import { FlightService } from '../_services/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
 content?: any;
  
  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flightService.getFlightList().subscribe(
      data => {
         this.content = data.Flight;

      },
      err => {
        this.content = JSON.parse(err.error).message;
      } 
    );
  }

}
