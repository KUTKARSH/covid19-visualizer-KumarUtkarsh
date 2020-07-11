import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string;
  password : string;
  loginSuccess : boolean;

  constructor() { 
    this.loginSuccess = false;
  }

  ngOnInit(): void {
  }

  login(){
    let key : string = this.email + " " + this.password;
    // alert("Key to fetch " + key);
    let user = localStorage.getItem(key);
    // alert(user)
    if(user === null)
    alert("Login unsuccessful...Retry");
    else{
      this.loginSuccess = true;
      alert("Login successful");
    }
  }

}
