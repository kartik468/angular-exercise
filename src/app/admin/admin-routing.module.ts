import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { CanDeactivateUserGuard } from './users/can-deactivate-user.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'users', component: UsersComponent },
      {
        path: 'user/:id',
        component: UserComponent,
        canDeactivate: [CanDeactivateUserGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
