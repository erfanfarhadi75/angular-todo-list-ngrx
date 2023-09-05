import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Store} from "@ngrx/store";
import {addTask} from "../state/actions";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class TaskFormComponent {
  newTaskName: string = '';

  constructor(private store: Store) {}

  addTask() {
    if (this.newTaskName.trim() !== '') {
      this.store.dispatch(addTask({ name: this.newTaskName }));
      this.newTaskName = '';
    }
  }
}
