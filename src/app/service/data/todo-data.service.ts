import { Todo } from './../../list-todos/list-todos.component';
import { HttpClient } from '@Angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
    ) { }

  retriveAllTodos(username){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodo(username,id){
   return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }
}
