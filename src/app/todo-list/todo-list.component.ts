import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask, TaskFilterType } from '../model';
import { Store } from '@ngrx/store';
import { setFilter } from '../state/actions';
import { AppState } from '../state/app.state';
import { selectFilter, selectFilteredTasks } from '../state/selectors';
import { TaskFormComponent } from '../task-form/task-form.component';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [
    TaskFormComponent,
    TaskItemComponent,
    MatButtonToggleModule,
    FormsModule,
    CommonModule,
    MatIconModule
  ],
  standalone: true,
})
export class TodoListComponent {
  tasks$: Observable<ITask[]>;
  filterType!: TaskFilterType;

  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.select(selectFilteredTasks);
    this.store.select(selectFilter).subscribe(filter => {
      this.filterType = filter;
    });
  }

  setFilter(filter: TaskFilterType) {
    this.store.dispatch(setFilter({ filter }));
  }
}
