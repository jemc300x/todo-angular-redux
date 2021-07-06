import { ActionReducerMap } from "@ngrx/store";
import { filterValid } from "./filters/filters.actions";
import { filterReducer } from "./filters/filters.reducer";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";

export interface AppState {
  todos: Todo[],
  filters: filterValid
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filters: filterReducer
}