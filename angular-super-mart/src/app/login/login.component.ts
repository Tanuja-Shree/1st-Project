import { Component, OnInit } from '@angular/core';
import * as UserData from '../login/user-details.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userName: string = '';
  public password: string = '';
  public data = [];
  public showErrorMsg: boolean = false;

  constructor() { }

  ngOnInit() {
    this.data = UserData['userData'];
  }

  login() {
    this.data.forEach( user => {
    if(user.userName === this.userName && user.password === this.password){
      console.log('success');
    } else {
      this.showErrorMsg = true;
    }
  });
   }
   clearData() {
    this.userName = '';
    this.password = '';
   }

}
