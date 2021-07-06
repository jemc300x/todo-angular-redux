import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Todo } from '../models/todo.model';
import { create } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  inputTexto!: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.inputTexto = new FormControl('', Validators.required);
  }

  add() {
    console.log(this.inputTexto.value);
    if ( this.inputTexto.invalid ) return;

    this.store.dispatch(create(new Todo(this.inputTexto.value)));

    this.inputTexto.reset();
  }

}
