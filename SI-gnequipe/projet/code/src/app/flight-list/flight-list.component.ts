import { Component, OnInit } from '@angular/core';
import { FlightService } from '../_services/flight.service';


@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  numbers: string[] = ['Vol 1', 'Vol 2', 'Vol 3'];
  flights: any = [];
  
  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flights = this.flightService.getFlightList()

  }

}
