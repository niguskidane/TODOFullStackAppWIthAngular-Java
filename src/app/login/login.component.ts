import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='nigus'
  password=''
  errorMessage='Invalid Credentials'
  invalidlogin=false

//Router
//Angular.giveMeRauter
//Dependecy Injection


  constructor(private router:Router, private hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    //console.log(this.username)
    //if(this.username==="nigus" && this.password==='dummy'){
      if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome',this.username])
      this.invalidlogin=false;
    }else{
      this.invalidlogin=true;
    }
  }
}
