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
}
