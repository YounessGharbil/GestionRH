import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { LogoutComponent } from './auth/logout/logout.component';
// import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent}, 
  { path:'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path:'salaries', loadChildren: () => import('./salaries/salaries.module').then(m => m.SalariesModule) },
  { path:'demandes-de-sanction', loadChildren: () => import('./demandes-de-sanction/demandes-de-sanction.module').then(m => m.DemandesDeSanctionModule) },
   {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
