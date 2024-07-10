import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Todo } from './todo.model';
import { Priority } from './priority.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  // mock-olom az api szolgáltatás
  getTodos() : Observable<Todo[]>{
    return of( // of-> a paraméterben átadott adatot observable-ként sugározza
        [
          {id: 1, name: 'mosás', prio: Priority.LOW},
          {id: 2, name: 'főzés', prio: Priority.LOW},
          {id: 3, name: 'bevásárlás', prio: Priority.MEDIUM}
        ]
      ).pipe(
        delay(2000) // a visszadást késleltem 2000 ms-sel
      );
  }
}
