import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-route-resolver',
  templateUrl: './route-resolver.component.html',
  styleUrls: ['./route-resolver.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteResolverComponent implements OnInit {
  todos$: Observable<any>;
  page = new BehaviorSubject<number>(0);
  limit = new BehaviorSubject<number>(15);

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.todos$ = combineLatest([
      this.page,
      this.limit
    ]).pipe(
      switchMap(([page, limit]: [number, number]) => {
        const sliceStart = page * limit;
        const size = (page + 1) * limit;

        return this.activatedRoute.data
          .pipe(
            map((data: any) => data.todos.slice(sliceStart, size))
          );

      })
    );


  }

  onPageChage(e: any) {
    this.limit.next(e.pageSize);
    this.page.next(e.pageIndex);
  }

}
