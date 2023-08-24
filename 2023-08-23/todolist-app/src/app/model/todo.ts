export class Todo {
  id: number | undefined;
  task: string = '';
  completed: boolean = false;

  constructor(taskText: string = '') {
    this.task = taskText;
  }
}
