import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  todo: Todo;

  constructor(private todoService: TodoService) {
    this.todo = todoService.todoForEdit;
  }

  submitHandler() {
    if (this.todo.id) {
      this.updateTask();
    } else {
      this.addTask();
    }
    this.todoService.todoForEdit = new Todo();
  }

  addTask() {
    this.todoService.addTask(this.todo.task);
  }

  updateTask() {
    this.todoService.updateTask(this.todo);
  }
}
