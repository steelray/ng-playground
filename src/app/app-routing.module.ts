import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelfRoutes } from './core/interfaces/self-route.interface';


export const routes: SelfRoutes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    label: 'Home'
  },
  {
    path: 'route-resolver',
    loadChildren: () => import('./modules/route-resolver/route-resolver.module').then(m => m.RouteResolverModule),
    label: 'Route Resolver'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
