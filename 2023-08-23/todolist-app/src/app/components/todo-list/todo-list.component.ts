import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: Array<Todo>;

  constructor() {
    this.todos = [
      { id: 1, task: 'Buy milk', completed: true },
      { id: 2, task: 'Drop daughter to school', completed: true },
      { id: 3, task: 'Pick daughter from school', completed: false },
      { id: 4, task: 'Learn Angular', completed: false },
      { id: 5, task: 'Prepare question paper', completed: false },
    ];
  }
}
