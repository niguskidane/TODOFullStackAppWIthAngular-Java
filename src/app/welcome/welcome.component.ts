import { MessageDataService } from './../service/data/message-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = ''
  welcomeMessage = 'Some Message'
  welcomeMessageFromService:String;
  constructor(private route: ActivatedRoute, private wellcomeMessageDataService: MessageDataService) { }

  ngOnInit() {
    //console.log(this.welcomeMessage);
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    // console.log('Welcome Message!')
   // console.log(this.wellcomeMessageDataService.excuteHelloWorldBeanMessageService());
    this.wellcomeMessageDataService.excuteHelloWorldBeanMessageService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorMessage(error)
    )
  }

  handleSuccessfulResponse(response) {
    //console.log(response);
    //console.log(response.message)
    this.welcomeMessageFromService=response.message;
  }

  handleErrorMessage(error){
   // console.log(error);
   // console.log(error.error)
    //console.log(error.error.message)
    this.welcomeMessageFromService=error.error.message;  
  }

  getWelcomeMessageWithPathVarible() {
    // console.log('Welcome Message!')
   // console.log(this.wellcomeMessageDataService.excuteHelloWorldBeanMessageService());
    this.wellcomeMessageDataService.excuteHelloWorldBeanMessageServiceWithPathVarible(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorMessage(error)
    )
  }
}
