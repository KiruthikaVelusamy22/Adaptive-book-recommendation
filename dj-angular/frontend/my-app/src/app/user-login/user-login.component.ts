import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
 username:string;
 password:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }
 LoginUser(username) {
   if(this.username == username&& this.password == "admin123"){
     console.log("welcome");
     localStorage.setItem('user',username)
     this.router.navigate(['Mood']);
     
   }
 }
 registerUser(){
  this.router.navigate(['Register']);
 }

}
