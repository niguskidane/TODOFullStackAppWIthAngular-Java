import { API_URL } from './../../app.constants';
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
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username,id){
   return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retriveTodo(username, id){
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`)
  }

  updateTodo(username, id, todo){
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`,todo);
  }

  createTodo(username, todo){
    return this.http.post(`${API_URL}/users/${username}/todos`,todo);
  }
}
