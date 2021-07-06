import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  toggle: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll() {
    this.toggle = !this.toggle;
    this.store.dispatch(toggleAll({value: this.toggle}));
  }
}
