import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {todoReducer} from "./state/reducers";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todo: todoReducer}, {}),
    StoreDevtoolsModule.instrument({}),
    TodoListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
