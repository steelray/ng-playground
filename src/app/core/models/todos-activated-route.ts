import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ITodo } from '../interfaces/todo.interface';


@Injectable({ providedIn: 'root' })
export class TodosActivatedRoute extends ActivatedRoute {

  data: Observable<ITodo[]>;

}
