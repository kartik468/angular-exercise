import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ForbiddenNameDirective } from './directives/forbidden-name.directive';

@NgModule({
  declarations: [AdminComponent, UsersComponent, UserComponent, ForbiddenNameDirective],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, AdminRoutingModule]
})
export class AdminModule {}
