import { createAction, props } from '@ngrx/store';


export const create = createAction('[TODO] Create', props<{texto: string}>());
export const toggle = createAction('[TODO] Toggle', props<{id: number}>());
export const edit   = createAction('[TODO] Edit', props<{id: number, text: string}>());
export const deleteTodo = createAction('[TODO] Delete', props<{id: number}>());
export const toggleAll = createAction('[TODO] ToggleAll', props<{value: boolean}>());
export const clearCompleted = createAction('[TODO] ClearCompleted');