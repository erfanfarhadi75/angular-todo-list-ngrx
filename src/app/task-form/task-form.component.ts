import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Store} from "@ngrx/store";
import {addTask} from "../state/actions";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    NgIf
  ],
  standalone: true
})
export class TaskFormComponent {
  name: string = '';
  description: string = '';

  constructor(private store: Store) {
  }

  addTask() {
    if (this.name.trim() !== '') {
      this.store.dispatch(addTask({name: this.name, description: this.description}));
      this.name = '';
      this.description = '';
    }
  }
}
