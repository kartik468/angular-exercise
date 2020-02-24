import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectiveAndPipeComponent } from './directives-and-pipes/directive-and-pipe/directive-and-pipe.component';
import { AuthGuard } from './auth.guard';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { LazyLoadParentComponent } from './lazy-loading-comp/lazy-load-parent/lazy-load-parent.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'directives-and-pipes', component: DirectiveAndPipeComponent },
  { path: 'lazy-load-comp', component: LazyLoadParentComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'rxjs',
    loadChildren: () =>
      import('./observables/observables.module').then(m => m.ObservablesModule)
  },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
