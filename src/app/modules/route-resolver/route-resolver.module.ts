import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteResolverRoutingModule } from './route-resolver-routing.module';
import { RouteResolverComponent } from './route-resolver.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [RouteResolverComponent],
  imports: [
    CommonModule,
    RouteResolverRoutingModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule
  ]
})
export class RouteResolverModule { }
