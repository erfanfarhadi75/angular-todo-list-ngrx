import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TaskFormComponent } from './task-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskFormComponent, BrowserAnimationsModule],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
