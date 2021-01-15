import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-loggedout',
  templateUrl: './loggedout.component.html',
  styleUrls: ['./loggedout.component.css']
})
export class LoggedoutComponent implements OnInit {
  isLoggedIn = true;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.tokenStorage.getUser();
  }

  loggedOut(): void {
    this.tokenStorage.signOut();
    this.isLoggedIn = false;
    this.reloadPage();
    
  }

  reloadPage(): void {
    window.location.assign(window.location.origin);
  }
}
