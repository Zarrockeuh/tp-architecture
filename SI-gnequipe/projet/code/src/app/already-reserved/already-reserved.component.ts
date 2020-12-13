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
  constructor(private tokenStorage: TokenStorageService, private flightService: FlightService ) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()) {
      this.useremail = this.tokenStorage.getUser().email;
    }
    this.flightService.getAlreadyReserved().subscribe(
      data => {
        this.content = data.reservation;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    )
    //alert(this.useremail);
    /*
      var j: number = 0;
      for(let i of this.content) {
        if(this.content[i].useremail == this.useremail) {
          this.displayContent[j].id.push(this.content[i].id) ;
          j++;
        }
      }
  */ 
      if(this.content[0].useremail == this.useremail){
        alert("Salut");
      }
    }

}
