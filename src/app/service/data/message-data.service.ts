import {HttpClient} from '@Angular/common/http';
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
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello');
    //console.log('Hello World Bean Service is Excuted!');
  }

 // http://localhost:8080/hello/Nigus%20Kidane

 excuteHelloWorldBeanMessageServiceWithPathVarible(name){
  return this.http.get<HelloWorldBean>(`http://localhost:8080/hello/${name}`);
  //console.log('Hello World Bean Service is Excuted!');
}
}
