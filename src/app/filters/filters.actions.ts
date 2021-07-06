import { createAction, props } from "@ngrx/store";

export type filterValid = 'todos' | 'completados' | 'pendientes';

export const setFilter = createAction('[Filter] Set filter', props<{ filter: filterValid }>());