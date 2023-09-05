import {createSelector} from '@ngrx/store';
import {AppState, TodoState} from '../app.state';
import {ITask} from "../../model";

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
  (filter: string, tasks: ITask[]) => {
    if (filter === 'All') {
      return tasks;
    } else if (filter === 'Active') {
      return tasks.filter(task => !task.completed);
    } else if (filter === 'Completed') {
      return tasks.filter(task => task.completed);
    } else {
      return tasks;
    }
  }
);
