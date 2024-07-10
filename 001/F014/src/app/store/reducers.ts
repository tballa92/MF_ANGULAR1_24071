// reducers: tiszta függvények, megkapják az akt. állaptoot + a műveltet
// (paraméterekkel) és visszaadják az új állapotot

import { createReducer, on } from "@ngrx/store";
import { Todo } from "./todo.model";
import { addTodo, deleteTodo, loadTodos, loadedTodos, updateTodo } from "./actions";
import { TodoService } from "./todo.service";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from "rxjs";
import { Priority } from "./priority.model";


// 1a) MEGÁLLAPOTM AZ ÁLLAPOTTERET
export interface TodoState{
  todos: Todo[]; // ebben tárolom a teendőket
  // később bővíthető az állapotok halmaza
}
// 1b) MEGHATÁROZOM A KEZDŐÁLLAPOTOT
export const initialState : TodoState = {
  todos: [ {id: 1, name: 'Todo 3', prio: Priority.HIGH}, {id: 2, name: 'Todo 2', prio: Priority.HIGH}]
};

// 2) REDUCEREK: ÁLLAPOT + AKCIÓ ÖSSZRENDELÉS
export const todoReducer = createReducer(
  initialState, // megadom a kiinduló állapotot
  // on hívásokkal leírom az egyes akciók értelmezését
  on(loadTodos, (state) => ({...state}) ), // TODO: api betöltés
  on(loadedTodos, (state, {todos}) => ({...state, todos})), // lemásolom az akt állapoto és a todos kulcsot felülírom a kapott taratlommal
  on(addTodo, (state, {todo}) => ({...state, todos: [...state.todos, todo]})), // lemásolom az akt állapotot és a todos tömbhöz hozzáfűzöm az új elemet
  on(deleteTodo, (state, {id}) => ({...state, todos: state.todos.filter((todo) => todo.id !== id)})), // filter segítségével eldobom az id egyezés rekordot
  on(updateTodo, (state, {todo}) => ({...state, todos: state.todos.map((t) => todo.id == t.id ? todo : t)}))  // map segítséégvel id egyezés esetén cserélem a rekordot
)


// EFFECT kezelés (aszinkonr kezelés)
@Injectable()
export class TodoEffects{
  constructor(private service : TodoService, private $actions : Actions){}

  // tudunk készíteni olyan mezőket, amelyek aszinkron adatkezelést tesznek lehetővé
  loadData$ = createEffect(() => {
    return this.$actions.pipe(
      ofType(loadTodos),
      mergeMap(() => {
        return this.service.getTodos()
          .pipe(
            map((todos) => loadedTodos({ todos }))
          );
      })
    );
  })
}
