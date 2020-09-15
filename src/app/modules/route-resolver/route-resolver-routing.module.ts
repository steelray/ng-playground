import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelfRoutes } from 'src/app/core/interfaces/self-route.interface';
import { RouteResolveService } from './route-resolve.service';
import { RouteResolverComponent } from './route-resolver.component';


const routes: SelfRoutes = [
  {
    path: '',
    component: RouteResolverComponent,
    resolve: { todos: RouteResolveService },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteResolverRoutingModule { }
