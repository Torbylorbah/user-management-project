import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    AllUsersComponent,
    DashboardComponent,
    CreateUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,

  ]
})
export class UserModule { }
