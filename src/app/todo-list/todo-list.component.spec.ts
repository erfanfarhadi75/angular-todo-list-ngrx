import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TodoListComponent } from './todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TodoListComponent,
        // TaskFormComponent,
        // TaskItemComponent,
        BrowserAnimationsModule,
      ],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
