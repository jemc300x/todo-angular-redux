import { Action, createReducer, on } from "@ngrx/store";
import { filterValid, setFilter } from "./filters.actions";

export const initialState: filterValid = 'todos'!;

const _filterReducer = createReducer<filterValid, Action>(initialState,
  on(setFilter, (state, { filter }) => filter),  
);

export function filterReducer(state: filterValid | undefined, action: Action) {
  return _filterReducer(state, action);
}