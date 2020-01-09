import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminComponent, UsersComponent, UserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
