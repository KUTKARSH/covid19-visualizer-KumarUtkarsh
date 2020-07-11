import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName : string;
  email : string;
  password : string;
  lastName : string;
  registerStatus : boolean;
  resp : any;

  registerUser(){
    let obj = {
      firstName : this.firstName,
      email : this.email,
      password : this.password,
      lastName : this.lastName
    };
    let key : string = this.email + " " + this.password;
    console.log(key);
    console.log(JSON.stringify(obj));
    let temp = localStorage.getItem(key);
    console.log("Key to get is " + key);
    // alert(temp);
    if(temp === null)
    {
      localStorage.setItem(key,JSON.stringify(obj));
      alert("Registration successful");
    }
    else
    alert("Already registered");
    this.registerStatus = true;
  }
  
  constructor(private http: HttpClient) { 
    this.registerStatus = false;
  }

  ngOnInit() : void {
    
  }
}