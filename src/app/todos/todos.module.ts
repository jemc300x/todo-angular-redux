import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    TodoItemComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoFooterComponent,
    TodoPageComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoPageComponent
  ]
})
export class TodosModule { }
