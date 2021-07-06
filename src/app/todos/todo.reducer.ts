import { createReducer, on, Action } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import { clearCompleted, create, deleteTodo, edit, toggle, toggleAll } from "./todo.actions";

export const initialState: Todo[] = [
  new Todo('Hola mundo'),
  new Todo('Como'),
  new Todo('Estan'),
  new Todo('Todos'),
];

const _todoReducer = createReducer(initialState,
  on(create, (state, { texto }) => [...state, new Todo(texto)]),
  on(deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(toggle, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo
      }
    })
  }),
  on(toggleAll, (state, { value }) => state.map(todo => ({...todo, completado: value}))),
  on(edit, (state, { id, text }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: text
        }
      } else {
        return todo
      }
    })
  }),
  on(clearCompleted, (state) => state.filter(todo => !todo.completado))
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}