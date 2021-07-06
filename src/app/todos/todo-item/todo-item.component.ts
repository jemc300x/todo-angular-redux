import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Todo } from '../models/todo.model';
import { deleteTodo, edit, toggle } from '../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('inputTexto') inputTxt!: ElementRef;

  chkInput!: FormControl;
  txtInput!: FormControl;
  editing: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkInput = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkInput.valueChanges.subscribe(value => this.store.dispatch(toggle({id: this.todo.id})))
  }

  edit(): void {
    this.editing = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.inputTxt.nativeElement.select()
    }, 1);
  }

  lostFocus() {
    this.editing = false;

    if (this.txtInput.invalid) return;
    if (this.txtInput.value === this.todo.texto) return;

    this.store.dispatch(edit({id: this.todo.id, text: this.txtInput.value}))
  }

  onDelete() {
    this.store.dispatch(deleteTodo({id: this.todo.id}));
  }

}
