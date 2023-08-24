import { Component } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  taskText: string = '';

  constructor(private todoService: TodoService) {}

  addTask() {
    this.todoService.addTask(this.taskText);
    this.taskText = '';
  }
}
