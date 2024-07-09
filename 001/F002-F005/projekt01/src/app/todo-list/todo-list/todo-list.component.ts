import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input({required: true, alias: 'todoItems'}) // felhelyezésnél todoItems néven be kell állítani a teendők listáját
  records! : Todo[]; // ! -> biztosan kap értékét az első hivatkozás előtt

  @Output('todoDeleted')
  deleted = new EventEmitter<Todo>();

  delete(todo : Todo){
    this.deleted.emit(todo);
  }
}
