import { Injectable } from '@angular/core';
//import { User } from '../models/user';

@Injectable()
export class UserService {

  private isUserLoggedIn:any;
  public usserLogged:any;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user:any) {
    console.log(user)
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('token', JSON.stringify(user));

  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('token') || '{}');
  }


}