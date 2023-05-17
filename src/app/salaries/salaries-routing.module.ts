import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSalarieComponent } from './create-salarie/create-salarie.component';
import { DeleteSalarieComponent } from './delete-salarie/delete-salarie.component';
import { GetAllSalariesComponent } from './get-all-salaries/get-all-salaries.component';
import { GetSalarieComponent } from './get-salarie/get-salarie.component';
import { UpdateSalarieComponent } from './update-salarie/update-salarie.component';
import { UploadSalariesComponent } from './upload-salaries/upload-salaries.component';

const routes: Routes = [
  { path: '', component: GetAllSalariesComponent },
  { path: 'get', component: GetSalarieComponent },
  { path: 'create', component: CreateSalarieComponent },
  { path: 'upload', component: UploadSalariesComponent },
  { path: 'update/:id', component: UpdateSalarieComponent },
  { path: 'delete/:id', component: DeleteSalarieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalariesRoutingModule { }
