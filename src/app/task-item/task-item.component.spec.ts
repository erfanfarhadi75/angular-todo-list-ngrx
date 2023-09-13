import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TaskItemComponent } from './task-item.component';
import { ITask } from '../model';
import { AppState } from '../state/app.state';
import { markAsNotificationsAction, removeFromNotificationsAction } from '../state/actions';

describe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;
  let store: MockStore<AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskItemComponent],
      providers: [provideMockStore()],
    }).compileComponents();
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
      completed: false,
    } as ITask;
    fixture.detectChanges();
  });

  it('should create TaskItemComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render the AddToNotifications button when task.isNotification is false', ()=>{
    component.task.isNotification = false ;
    fixture.detectChanges();
    const addButton = fixture.nativeElement.querySelector(
      'button[aria-label="is notifications"]');
    expect(addButton).toBeTruthy();
  })

  it('should render the RemoveFromNotifications button when task.isNotification is true', ()=>{
    component.task.isNotification = true ;
    fixture.detectChanges();
    const removeButton =fixture.nativeElement.querySelector(
      'button[aria-label="remove notifications"]');
    expect(removeButton).toBeTruthy();
  })


  it('should dispatch  markAsNotificationsAction when clicking onAddToNotifications button', ()=>{
    component.task.isNotification = false ;
    fixture.detectChanges();
    const addButton  = fixture.nativeElement.querySelector(
      'button[aria-label="is notifications"]');
    addButton.click();
    expect(store.dispatch).toHaveBeenCalledWith(
      markAsNotificationsAction({ id: component.task.id })
    );
  })

  it('should dispatch removeFromNotificationsAction when clicking onRemoveFromNotifications Button', ()=>{
    component.task.isNotification = true ;
    fixture.detectChanges();
    const removeButton = fixture.nativeElement.querySelector(
      'button[aria-label="remove notifications"]');
    removeButton.click();
    expect(store.dispatch).toHaveBeenCalledWith(
      removeFromNotificationsAction({id : component.task.id})
    )
  })

});
