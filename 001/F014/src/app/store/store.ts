// sok apró részből egy app szintű alkalmazást építsünk

import { Action, ActionReducer } from "@ngrx/store";
import { TodoEffects, TodoState, todoReducer } from "./reducers";

// létrehozom a meglévő tudás egyesítésével a kimentet
export interface AppState{
  // jelen pill. 1 "alrendszer"
  todo: TodoState
}

export interface AppStore{
  todo: ActionReducer<TodoState, Action>;
}

export const appStore : AppStore = {
  todo: todoReducer
}

export const appEffect = [TodoEffects];
