import {createAction, props} from "@ngrx/store";

export const addTask = createAction(
  '[Todo] Add Task',
  props<{ name: string }>()
);

export const completeTask = createAction(
  '[Todo] Complete Task',
  props<{ id: number }>()
);
export const uncompleteTask = createAction(
  '[Todo] Uncomplete Task',
  props<{ id: number }>());

export const deleteTask = createAction(
  '[Todo] Delete Task',
  props<{ id: number }>()
);

export const setFilter = createAction(
  '[Todo] Set Filter',
  props<{ filter: string }>()
);
