import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';

// task-list component (child of my-app component):
@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  directives: [TaskComponent],
  templateUrl: 'app/task-list.component.html'
  // template:`
  //   <task-display *ngFor="#currentTask of taskList" (click)="taskClicked(currentTask)"  [class.selected]="currentTask === selectedTask">
  //   [task]="currentTask">
  //   </task-display>
  // `
})
export class TaskListComponent {
    public taskList: Task[];
    public onTaskSelect: EventEmitter<Task>;
    public selectedTask: Task;
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }

  taskClicked(clickedTask: Task): void {
    console.log('child', clickedTask);
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
}
