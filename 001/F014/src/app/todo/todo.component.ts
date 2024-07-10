import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Todo } from '../store/todo.model';
import { Observable } from 'rxjs';
import { AppState } from '../store/store';
import { Store } from '@ngrx/store';
import { deleteTodo } from '../store/actions';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos$ : Observable<Todo[]>;

  constructor(private store : Store<AppState>){
      this.todos$ = this.store.select((state) => state.todo.todos);
  }

  delete(t : Todo){
    let id = t.id;
    this.store.dispatch(deleteTodo({id})); // a műveleteket a dispatch hívással tudjuk kiválatani
  }
}
