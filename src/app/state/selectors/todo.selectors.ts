import { createSelector } from '@ngrx/store';
import { AppState, TodoState } from '../app.state';
import { ITask, TaskFilterType } from '../../model';

const selectTodoFeature = (state: AppState) => state.todo;

export const selectTasks = createSelector(
  selectTodoFeature,
  (state: TodoState) => state.tasks
);
export const selectFilter = createSelector(
  selectTodoFeature,
  (state: TodoState) => state.filter
);
export const selectFilteredTasks = createSelector(
  selectFilter,
  selectTasks,
  (filter: TaskFilterType, tasks: ITask[]) => {
    switch (filter) {
      case 'All':
        return tasks;
      case 'Active':
        return tasks.filter(task => !task.completed);
      case 'Completed':
        return tasks.filter(task => task.completed);
      case 'Favorites':
        return tasks.filter(task => task.isFavorite);
      default:
        return tasks;
    }
  }
);
