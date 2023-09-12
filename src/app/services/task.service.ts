import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import TASKS from '../data/tasks/task';
import { Task } from '../data/tasks/task.type';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks = (): Observable<Task[]> => {
    return of(TASKS);
  };
}
