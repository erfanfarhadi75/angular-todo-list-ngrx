import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Store} from '@ngrx/store';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {TaskItemComponent} from './task-item.component';
import {ITask} from '../model';
import {AppState} from '../state/app.state';

describe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;
  let store: MockStore<AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TaskItemComponent,
      ],
      providers: [
        provideMockStore()
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItemComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore<AppState>;
    spyOn(store, 'dispatch');
    component.task = {
      id: 1,
      name: 'Test task',
      description: 'Test description',
      isFavorite: false,
      completed: false
    } as ITask;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
