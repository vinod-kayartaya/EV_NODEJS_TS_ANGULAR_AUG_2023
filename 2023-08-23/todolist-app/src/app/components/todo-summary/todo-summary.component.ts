import { Component } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-summary',
  templateUrl: './todo-summary.component.html',
  styleUrls: ['./todo-summary.component.css'],
})
export class TodoSummaryComponent {
  constructor(public todoService: TodoService) {}
}
