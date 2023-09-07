import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {completeTask, deleteTask, markAsFavorite, removeFromFavorites, uncompleteTask} from "../state/actions";
import {ITask} from "../model";
import {AppState} from "../state/app.state";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  imports: [
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    CommonModule
  ],
  standalone: true
})
export class TaskItemComponent {
  @Input() task!: ITask;

  constructor(private store: Store<AppState>) {
  }

  deleteTask() {
    this.store.dispatch(deleteTask({id: this.task.id}));
  }

  completeTask() {
    this.store.dispatch(completeTask({id: this.task.id}));
  }

  unCompleteTask() {
    this.store.dispatch(uncompleteTask({id: this.task.id}));
  }

  addToFavorites() {
    this.store.dispatch(markAsFavorite({id: this.task.id}));
  }

  removeFromFavorites() {
    this.store.dispatch(removeFromFavorites({id: this.task.id}));
  }

}
