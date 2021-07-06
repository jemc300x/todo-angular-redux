import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { filterValid, setFilter } from 'src/app/filters/filters.actions';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: filterValid = 'todos';
  filters: filterValid[] = ['todos', 'pendientes', 'completados'];
  pending: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filters').subscribe(filtro => this.currentFilter = filtro);
    this.store.subscribe(state => {
      this.currentFilter = state.filters;
      this.pending = state.todos.filter(todo => !todo.completado).length;
    })
  }

  changeFilter(filter: filterValid) {
    console.log(filter);
    this.currentFilter = filter;
    this.store.dispatch(setFilter({ filter }));
  }

  clearCompleted(): void {
    this.store.dispatch(clearCompleted());
  }

}
