import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    email: null,
    password: null,
    nom: null,
    prenom: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }


  ngOnInit(): void {
  }

  onSubmit(): void {
    const { email, password, nom, prenom} = this.form;

    this.authService.register(email, password, nom, prenom).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.console.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
