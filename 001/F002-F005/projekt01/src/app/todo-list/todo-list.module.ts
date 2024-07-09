import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListAppComponent } from './todo-list-app/todo-list-app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PriorityPipe } from './priority.pipe';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodoListAppComponent,
    TodoListComponent,
    PriorityPipe,
    TodoAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule // az ngModel kötéshez kell jelen esetben
  ],
  exports: [TodoListAppComponent]
})
export class TodoListModule { }
