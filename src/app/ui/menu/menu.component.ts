import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { routes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  routes = routes;

  ngOnInit() {
    console.log(this.routes);
  }

}
