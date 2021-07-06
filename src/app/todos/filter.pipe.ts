import { Pipe, PipeTransform } from '@angular/core';
import { filterValid } from '../filters/filters.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: filterValid): Todo[] {
    switch (filter) {
      case 'completados': return todos.filter(todo => todo.completado);
      case 'pendientes': return todos.filter(todo => !todo.completado);
      default: return todos;
    }
  }

}
