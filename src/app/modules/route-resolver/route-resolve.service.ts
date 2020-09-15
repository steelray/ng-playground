import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { empty } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({ providedIn: 'root' })
export class RouteResolveService implements Resolve<any> {

  constructor(private apiService: ApiService) { }

  resolve() {
    return this.apiService.getTodos().pipe(
      catchError(err => {
        console.log(err);
        return empty();
      })
    );
  }
}
