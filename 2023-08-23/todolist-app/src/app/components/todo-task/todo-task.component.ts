import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
})
export class TodoTaskComponent {
  // @Input() decorator tells angular runtime that the value for this member is passed from the parent
  @Input()
  todo: Todo | undefined;

  constructor(private todoService: TodoService) {}

  deleteTask = () => {
    if (!window.confirm('Are you sure?')) return;

    let id = this.todo?.id;
    if (id) {
      this.todoService.deleteTask(id);
    }
  };

  toggleTaskStatus = () => {
    let id = this.todo?.id;
    if (id) {
      this.todoService.toggleTaskStatus(id);
    }
  };

  moveTaskUp() {
    let id = this.todo?.id;
    if (id) {
      this.todoService.moveTaskUp(id);
    }
  }

  moveTaskDown() {
    let id = this.todo?.id;
    if (id) {
      this.todoService.moveTaskDown(id);
    }
  }
}
