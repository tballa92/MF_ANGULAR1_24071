// leírom, hogy az állapotok kapcsán
// milyen műveletek értelmezek (a művelete jellege + a művelet paramétere)
import {createAction, props} from '@ngrx/store';
import { Todo } from './todo.model';

// a leíráshoz a createAction függvényt használom
export const loadTodos = createAction('[Todo] Load Todos'); // megadom a típus nevét, amit használni kell (jelzi, hogy szükség van az adatokra, elkezdjük a műveletet)
export const loadedTodos = createAction('[Todo] Loaded Todos', props<{todos: Todo[]}>()); // sikeres adatletöltés, paraméterben kapom a rekordokat
export const addTodo = createAction('[Todo] Add Todo', props<{todo: Todo}>()) // a hozzáadáshoz kiegészítő paraméterként (propertyként) meg kell kapni a hozzáadni kívánt teendőt
// adjunk hozzá törléshez és módosításhoz is műveletet
export const deleteTodo = createAction('[Todo] Delete Todo', props<{id: number}>()); // megkapom a törlendő id-t
export const updateTodo = createAction('[Todo] Delete Todo', props<{todo: Todo}>()); // megkapom a módosított objektumot (id nem változik)


