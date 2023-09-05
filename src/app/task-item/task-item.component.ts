import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {completeTask, deleteTask, uncompleteTask} from "../state/actions";
import {Task} from "../model";
import {AppState} from "../state/app.state";
import {FormsModule} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  imports: [
    FormsModule,
    NgClass,
    NgIf
  ],
  standalone: true
})
export class TaskItemComponent {
  @Input() task!: Task;

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
}
