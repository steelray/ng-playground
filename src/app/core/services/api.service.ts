import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITodo } from '../interfaces/todo.interface';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getTodos() {
    return this.http.get<Observable<ITodo[]>>(this.apiUrl('todos'));
  }

  private apiUrl(url: string) {
    return `${environment.apiEndpoint}/${url}`;
  }

}
