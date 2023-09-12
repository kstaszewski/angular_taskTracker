import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../data/tasks/task.type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../utils/constants';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks = (): Observable<Task[]> => {
    return this.http.get<Task[]>(API_URL);
  };

  deleteTask = ({ id }: Task): Observable<Task> => {
    const url = `${API_URL}/${id}`;

    return this.http.delete<Task>(url);
  };

  toggleReminder = (task: Task): Observable<Task> => {
    const { id } = task;
    const url = `${API_URL}/${id}`;

    return this.http.put<Task>(url, task, httpOptions);
  };
}
