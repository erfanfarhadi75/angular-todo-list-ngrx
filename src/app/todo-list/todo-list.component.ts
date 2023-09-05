import {Component} from '@angular/core';
import {async, Observable} from "rxjs";
import {ITask} from "../model";
import {Store} from "@ngrx/store";
import {setFilter} from "../state/actions";
import {AppState} from "../state/app.state";
import {selectFilteredTasks} from "../state/selectors";
import {TaskFormComponent} from "../task-form/task-form.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {TaskItemComponent} from "../task-item/task-item.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [
    TaskFormComponent,
    TaskItemComponent,
    NgForOf,
    AsyncPipe,
  ],
  standalone: true
})
export class TodoListComponent {
  tasks$: Observable<ITask[]>;
  filter: string = 'All';

  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.select(selectFilteredTasks);
  }

  setFilter(filter: string) {
    this.filter = filter;
    this.store.dispatch(setFilter({filter}));
  }
}
