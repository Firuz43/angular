import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from 'src/app/model/signInData';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
/*======= Onsubmit method taking values from form ========*/
  onSubmit(signInForm: NgForm){
    console.log(signInForm.value);
    const signInData = new SignInData(signInForm.value.userName, signInForm.value.password)
    this.authenticationService.authenticate(signInData);
  }
}
