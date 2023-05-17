import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalariesRoutingModule } from './salaries-routing.module';
import { SalariesComponent } from './salaries.component';
import { GetAllSalariesComponent } from './get-all-salaries/get-all-salaries.component';
import { GetSalarieComponent } from './get-salarie/get-salarie.component';
import { CreateSalarieComponent } from './create-salarie/create-salarie.component';
import { UpdateSalarieComponent } from './update-salarie/update-salarie.component';
import { DeleteSalarieComponent } from './delete-salarie/delete-salarie.component';
import { UploadSalariesComponent } from './upload-salaries/upload-salaries.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    SalariesComponent,
    GetAllSalariesComponent,
    GetSalarieComponent,
    CreateSalarieComponent,
    UpdateSalarieComponent,
    DeleteSalarieComponent,
    UploadSalariesComponent,
  ],
  imports: [
    CommonModule,
    SalariesRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule    
  ]
})
export class SalariesModule { }
