export interface ITask {
  id: number;
  name: string;
  description: string;
  completed: boolean;
  isFavorite: boolean;
}


export type TaskFilterType =  'All' | 'Active' | 'Completed' | 'Favorites'
