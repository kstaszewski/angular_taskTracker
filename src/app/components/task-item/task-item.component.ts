import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/data/tasks/task.type';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task!: Task;

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  onDelete = (task: Task): void => {
    this.onDeleteTask.emit(task);
  };

  onDoubleClick = (task: Task) => {
    this.onToggleReminder.emit(task);
  };
}
