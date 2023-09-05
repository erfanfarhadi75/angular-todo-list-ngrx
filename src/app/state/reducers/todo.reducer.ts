import {createReducer, on} from '@ngrx/store';
import {addTask, completeTask, deleteTask, setFilter, uncompleteTask} from '../actions';
import {initialTodoState} from "../app.state";

export const todoReducer = createReducer(
  initialTodoState,
  on(addTask, (state, {name}) => ({
    ...state,
    tasks: [...state.tasks, {id: Date.now(), name, completed: false}],
  })),
  on(completeTask, (state, {id}) => ({
    ...state,
    tasks: state.tasks.map(task =>
      task.id === id ? {...task, completed: true} : task
    ),
  })),
  on(uncompleteTask, (state, {id}) => ({
    ...state,
    tasks: state.tasks.map(task =>
      task.id === id ? {...task, completed: false} : task
    ),
  })),
  on(deleteTask, (state, {id}) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== id),
  })),
  on(setFilter, (state, {filter}) => ({
    ...state,
    filter,
  }))
);
