import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
})
export class TodoTaskComponent {
  // @Input() decorator tells angular runtime that the value for this member is passed from the parent
  @Input()
  todo: Todo | undefined;
}
