import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // services in Angular are always singleton, and the data+methods of the service
  // are available to all the components (and/or other services) which ask for this as dependency.
  // dependencies are expressed as parameters in the constructor.

  private todos: Todo[];
  private _todoForEdit: Todo = new Todo();

  constructor() {
    this.todos = [
      { id: 1, task: 'Buy milk', completed: true },
      { id: 2, task: 'Drop daughter to school', completed: true },
      { id: 3, task: 'Pick daughter from school', completed: false },
      { id: 4, task: 'Learn Angular', completed: true },
      { id: 5, task: 'Prepare question paper', completed: false },
    ];
  }

  set todoForEdit(todoForEdit: Todo) {
    console.log('recd a todo', todoForEdit);
    this._todoForEdit.id = todoForEdit.id;
    this._todoForEdit.completed = todoForEdit.completed;
    this._todoForEdit.task = todoForEdit.task;
  }

  get todoForEdit(): Todo {
    return this._todoForEdit;
  }

  addTask = (task: string) => {
    let id =
      this.todos.length === 0
        ? 1
        : 1 + Math.max(...this.todos.map((t: Todo) => t.id || 0));
    let todo: Todo = { id, task, completed: false };
    this.todos.unshift(todo);
  };

  updateTask(todo: Todo) {
    let index = this.todos.findIndex((t) => t.id === todo.id);
    this.todos[index] = { ...todo };
    this._todoForEdit = new Todo();
  }

  toggleTaskStatus = (id: number): void => {
    let todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  };

  get todoTasks(): Todo[] {
    return this.todos;
  }

  deleteTask = (id: number): void => {
    let index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) return;

    this.todos.splice(index, 1);
  };

  moveTaskUp = (id: number): void => {
    let index = this.todos.findIndex((t) => t.id === id);
    if (index <= 0) return;

    // swap the current task with the previous one
    let tmp = this.todos[index];
    this.todos[index] = this.todos[index - 1];
    this.todos[index - 1] = tmp;
  };

  moveTaskDown = (id: number): void => {
    let index = this.todos.findIndex((t) => t.id === id);
    if (index === -1 || index === this.todos.length - 1) return;

    // swap the current task with the next one
    let tmp = this.todos[index];
    this.todos[index] = this.todos[index + 1];
    this.todos[index + 1] = tmp;
  };

  get taskCount() {
    return this.todos.length;
  }

  get completedTaskCount() {
    return this.todos.filter((t) => t.completed).length;
  }

  get pendingTaskCount() {
    return this.todos.filter((t) => !t.completed).length;
  }
}
