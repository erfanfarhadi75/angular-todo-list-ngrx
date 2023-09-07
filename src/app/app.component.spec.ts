import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { todoReducer } from './state/reducers';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        TodoListComponent,
        BrowserModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({ todo: todoReducer }, {}),
      ],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
