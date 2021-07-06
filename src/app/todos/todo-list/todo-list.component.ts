import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { filterValid } from 'src/app/filters/filters.actions';

import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  currentFilter: filterValid = 'todos';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('todos').subscribe(todos => this.todos = todos);
    this.store.subscribe(state => {
      this.todos = state.todos;
      this.currentFilter = state.filters;
    });
  }

}
