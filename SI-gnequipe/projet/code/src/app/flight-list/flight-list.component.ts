import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  numbers: string[] = ['Vol 1', 'Vol 2', 'Vol 3'];

  
  constructor() { }

  ngOnInit(): void {
  }

}
