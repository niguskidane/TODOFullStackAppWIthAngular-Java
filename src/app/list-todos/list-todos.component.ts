import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

todos:Todo;
message:String;
// [
//   new Todo(1,'Learn Java', false, new Date()),
//   new Todo(2,'Learn Math', false, new Date()),
//   new Todo(3,'Learn JavaScript', false, new Date()),
//   new Todo(4,'Learn Angular', false, new Date())
// ]

//   todo={
//   id:1,
//   description:'Learn Programming'
// }

  constructor(
    private todoDateService:TodoDataService,
    private route: Router
    ) { }

  ngOnInit() {
    this.todoDateService.retriveAllTodos('NigusKidane').subscribe(
      response =>{
             console.log(response);
             this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`Todo deleted ${id}`);
    this.todoDateService.deleteTodo('NigusKidane',id).subscribe(
      response => {
        console.log(response)
        this.message=`Delete of Todo ${id} is Successful!`;
      }
    )
  }

  updateTodo(id){
    console.log(`update todo ${id}`);
    this.route.navigate(['todos', id]);
  }

  addTodo(){
    this.route.navigate(['todos', -1]);
  }
}
