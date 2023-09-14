import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [{ path: '', component: UserComponent,
    children: [
      { path: '', component:DashboardComponent  },
      { path: 'users/create', component: CreateUserComponent  },
      { path: ':id/view-user', component: UserDetailsComponent  },
      { path: ':id/edit-user', component: EditUserComponent},
      { path: 'users', component: AllUsersComponent}
    ],


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
