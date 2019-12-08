import { API_URL } from './../app.constants';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@Angular/common/http';
import { map } from 'rxjs/operators';

export const TOKEN='token';
export const AUTHENTICATED_USER='authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }

  excuteJWTAuthenticationService(username, password){
    
    return this.http.post<any>(`${API_URL}/authenticate`,{
      username,
      password
    }).pipe(
      map(
        data=>{
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
    //console.log('Hello World Bean Service is Excuted!');
  }

  authenticate(username, password) {
    //console.log('before '+this.isUserLoggedIn())
    if (username === "nigus" && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      //console.log('after '+this.isUserLoggedIn())
      return true;
    }
    return false;

  }

  excuteAuthenticationService(username, password){
    
    let basicAuthHeaderString='Basic '+window.btoa(username+ ':' + password);

    let header=new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      }
    );
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,{headers:header}).pipe(
      map(
        data=>{
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        }
      )
    );
    //console.log('Hello World Bean Service is Excuted!');
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
        return sessionStorage.getItem(TOKEN);
    }
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user===null);
  }
  
  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

 
}

export class AuthenticationBean{
    constructor(public message: String){}
}
