import { Component } from '@angular/core';
import { Todo } from '../models/Todo';
import { Priority } from '../models/Priority';

@Component({
  selector: 'app-todo-list-app',
  templateUrl: './todo-list-app.component.html',
  styleUrl: './todo-list-app.component.css'
})
export class TodoListAppComponent {
  todos : Todo[]; // a teendők listáját az app kezeli, és akinek szüksége van rá, majd átadjuk neki (Input elemként)

  constructor(){
    this.todos = [];
    this.todos.push({name: 'mosogatás', priority: Priority.HIGH});
  }

  addTodo(newTodo : Todo){
    this.todos.push(newTodo);
  }

  deleteTodo(deletedTodo : Todo){
    this.todos = this.todos.filter((todo) => !(todo.name === deletedTodo.name &&
                                               todo.priority === deletedTodo.priority))
  }
}
