import { Component } from '@angular/core';
import TASKS from 'src/app/data/tasks/task';
import { Task } from 'src/app/data/tasks/task.type';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  tasks: Task[] = TASKS;
}
