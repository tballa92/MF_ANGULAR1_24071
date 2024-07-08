import { Component, Input } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input({required: true, alias: 'todoItems'}) // felhelyezésnél todoItems néven be kell állítani a teendők listáját
  records! : Todo[]; // ! -> biztosan kap értékét az első hivatkozás előtt
}
