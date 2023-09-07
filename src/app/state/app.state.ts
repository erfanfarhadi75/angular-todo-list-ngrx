import { ITask, TaskFilterType } from '../model';

export interface AppState {
  todo: TodoState;
}

export interface TodoState {
  tasks: ITask[];
  filter: TaskFilterType; // Filter for displaying tasks (All, Active, Completed)
}

// Define an initial state for the todo feature
export const initialTodoState: TodoState = {
  tasks: [],
  filter: 'All',
};
