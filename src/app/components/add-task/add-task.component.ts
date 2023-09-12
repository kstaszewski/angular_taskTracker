import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/data/tasks/task.type';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  onSubmit = () => {
    if (!this.text || !this.day) return;

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.onAddTask.emit(newTask);
  };
}
