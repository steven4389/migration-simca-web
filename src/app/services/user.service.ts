import { Injectable } from '@angular/core';
//import { User } from '../models/user';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  public usserLogged;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user) {
    console.log(user)
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('token', JSON.stringify(user));

  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('token'));
  }


}