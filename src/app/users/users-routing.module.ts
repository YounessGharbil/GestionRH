import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { GetUserComponent } from './get-user/get-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: GetAllUsersComponent },
  { path: 'get', component: GetUserComponent },
  { path: 'create', component: CreateUserComponent },
  { path: 'update/:id', component: UpdateUserComponent },
  { path: 'delete/:id', component: DeleteUserComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
