import { Route } from '@angular/router/router';
import { Observable } from 'rxjs';
import { ITodo } from './todo.interface';

export interface SelfRoute extends Route {
  label?: string;
}

export declare type SelfRoutes = SelfRoute[];

export declare type TodosResolveData = { [name: string]: Observable<ITodo[]> };
