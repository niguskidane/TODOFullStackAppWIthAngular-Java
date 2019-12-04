import { API_URL } from './../../app.constants';
import {HttpClient, HttpHeaders} from '@Angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  constructor(public message:String){}
}

@Injectable({
  providedIn: 'root'
})
export class MessageDataService {

  constructor(
    private http:HttpClient
  ) { }

  excuteHelloWorldBeanMessageService(){
    // let basicAuthHeaderString=this.createBasicAuthenticationHttpHeader();

    // let header=new HttpHeaders(
    //   {
    //     Authorization: basicAuthHeaderString
    //   }
    // );

    return this.http.get<HelloWorldBean>(`${API_URL}/hello`,//{headers:header}
    );
    //console.log('Hello World Bean Service is Excuted!');
  }

 // http://localhost:8080/hello/Nigus%20Kidane

 excuteHelloWorldBeanMessageServiceWithPathVarible(name){
  return this.http.get<HelloWorldBean>(`${API_URL}/hello/${name}`);
  //console.log('Hello World Bean Service is Excuted!');
}

// createBasicAuthenticationHttpHeader(){
//   let username='niguskidane';
//   let password='dummy';
//   let basicAuthHeaderString='Basic '+window.btoa(username+ ':' + password);
//   return basicAuthHeaderString;
// }

}
