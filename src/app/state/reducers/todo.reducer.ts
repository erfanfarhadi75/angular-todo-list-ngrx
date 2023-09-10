import { createReducer, on } from '@ngrx/store';
import {
  addTask,
  completeTask,
  deleteTask,
  markAsFavorite,
  markAsNotificationsAction,
  removeFromFavorites,
  removeFromNotificationsAction,
  setFilter,
  uncompleteTask,
} from '../actions';
import { initialTodoState } from '../app.state';

export const todoReducer = createReducer(
  initialTodoState,
  on(addTask, (state, { name, description }) => ({
    ...state,
    tasks: [
      ...state.tasks,
      {
        id: Date.now(),
        name,
        isFavorite: false,
        description,
        completed: false,
        isNotification: false,
      },
    ],
  })),
  on(markAsFavorite, (state, { id }) => ({
    ...state,
    tasks: state.tasks.map(task =>
      task.id === id ? { ...task, isFavorite: true } : task
    ),
  })),

  // Handle the REMOVE_FROM_FAVORITES action
  on(removeFromFavorites, (state, { id }) => ({
    ...state,
    tasks: state.tasks.map(task =>
      task.id === id ? { ...task, isFavorite: false } : task
    ),
  })),
  on(completeTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.map(task =>
      task.id === id ? { ...task, completed: true } : task
    ),
  })),
  on(uncompleteTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.map(task =>
      task.id === id ? { ...task, completed: false } : task
    ),
  })),
  on(deleteTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== id),
  })),
  on(setFilter, (state, { filter }) => ({
    ...state,
    filter,
  })) ,
  on(markAsNotificationsAction , (state, { id }) => ({
    ...state,
    tasks: state.tasks.map(task=>
      task.id === id ? { ...task , isNotification:true} : task
      ),
  })) ,

  on(removeFromNotificationsAction , (state, { id }) => ({
    ...state,
    tasks: state.tasks.map(task=>
      task.id === id ? {...task , isNotification : false} : task),
  })),
);
