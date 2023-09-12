import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/data/tasks/task.type';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  subscription: Subscription;
  showForm: boolean = false;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showForm = value;
    });
  }

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  onSubmit = () => {
    if (!this.text || !this.day) return;

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);
  };
}
