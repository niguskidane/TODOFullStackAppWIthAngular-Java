import { Component, OnInit } from '@angular/core';

export class Todo{

  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
    ){}
}



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

todos=[
  new Todo(1,'Learn Java', false, new Date()),
  new Todo(2,'Learn Math', false, new Date()),
  new Todo(3,'Learn JavaScript', false, new Date()),
  new Todo(4,'Learn Angular', false, new Date())
]

//   todo={
//   id:1,
//   description:'Learn Programming'
// }

  constructor() { }

  ngOnInit() {
  }

}
