export interface ITask {
  id: number;
  name: string;
  description: string;
  completed: boolean;
  isFavorite: boolean;
  isNotification: boolean;
}

export type TaskFilterType = 'All' | 'Active' | 'Completed' | 'Favorites'| 'Notification';
