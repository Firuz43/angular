import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  /* ==== Mocked User for testing purpose ===== */
  private readonly mockedUser = new SignInData('Firuz', 'firuz1999');
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if(this.checkCredentials(signInData)){
      this.isAuthenticated = true;
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  /*====== Here only for testing checkCredentials was created you can use other services or tokens   ===== */
  private checkCredentials(signInData: SignInData): boolean {
    return this.checkUserName(signInData.getUserName()) && this.checkPassword(signInData.getPassword());
  }

  /* === Checking if username and password mathches our mocked users name and password */
  private checkUserName(userName: string): boolean {
    return userName == this.mockedUser.getUserName()
  }

  private checkPassword(password: string): boolean {
    return password == this.mockedUser.getPassword()
  }
}
