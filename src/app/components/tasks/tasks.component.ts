import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/data/tasks/task.type';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  tasks: Task[] = [];

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks = (): void => {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  };

  deleteTask = (task: Task): void => {
    this.taskService.deleteTask(task).subscribe(() => this.fetchTasks());
  };

  toggleReminder = (task: Task): void => {
    task.reminder = !task.reminder;

    this.taskService.toggleReminder(task).subscribe();
  };

  addTask = (task: Task): void => {
    this.taskService.addTask(task).subscribe();
    this.fetchTasks();
  };
}
