import { createAction, props } from '@ngrx/store';
import { TaskFilterType } from '../../model';

export const addTask = createAction(
  '[Todo] Add Task',
  props<{ name: string; description: string }>()
);

export const markAsFavorite = createAction(
  '[Todo] Mark Task as Favorite',
  props<{ id: number }>()
);

export const removeFromFavorites = createAction(
  '[Todo] Remove Task from Favorites',
  props<{ id: number }>()
);
export const completeTask = createAction(
  '[Todo] Complete Task',
  props<{ id: number }>()
);
export const uncompleteTask = createAction(
  '[Todo] Uncomplete Task',
  props<{ id: number }>()
);

export const deleteTask = createAction(
  '[Todo] Delete Task',
  props<{ id: number }>()
);

export const setFilter = createAction(
  '[Todo] Set Filter',
  props<{ filter: TaskFilterType }>()
);

export const markAsNotificationsAction = createAction(
  '[Todo] Mark As Notifications',
  props<{id : number}>()
);

export const removeFromNotificationsAction = createAction(
  '[Todo] Remove From Notifications',
  props<{id :number}>()
)

