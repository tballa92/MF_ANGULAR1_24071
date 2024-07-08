import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListAppComponent } from './todo-list-app/todo-list-app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PriorityPipe } from './priority.pipe';



@NgModule({
  declarations: [
    TodoListAppComponent,
    TodoListComponent,
    PriorityPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [TodoListAppComponent]
})
export class TodoListModule { }
