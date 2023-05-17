import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandesDeSanctionRoutingModule } from './demandes-de-sanction-routing.module';
import { DemandesDeSanctionComponent } from './demandes-de-sanction.component';
import { RapportTeamLeaderComponent } from './rapport-team-leader/rapport-team-leader.component';
import { RapportSuperviseurComponent } from './rapport-superviseur/rapport-superviseur.component';
import { RapportManagerComponent } from './rapport-manager/rapport-manager.component';
import { RapportRhComponent } from './rapport-rh/rapport-rh.component';
import { RapportRhPlus1Component } from './rapport-rh-plus1/rapport-rh-plus1.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GetAllRapportTeamLeaderComponent } from './get-all-rapport-team-leader/get-all-rapport-team-leader.component';
import { GetAllRapportSuperviseurComponent } from './get-all-rapport-superviseur/get-all-rapport-superviseur.component';
import { GetAllRapportManagerComponent } from './get-all-rapport-manager/get-all-rapport-manager.component';
import { GetAllRapportRhComponent } from './get-all-rapport-rh/get-all-rapport-rh.component';
import { GetAllRapportRhPlus1Component } from './get-all-rapport-rh-plus1/get-all-rapport-rh-plus1.component';
import { GetOneRapportRhPlus1Component } from './get-one-rapport-rh-plus1/get-one-rapport-rh-plus1.component';
import { GetOneRapportRhComponent } from './get-one-rapport-rh/get-one-rapport-rh.component';
import { GetOneRapportManagerComponent } from './get-one-rapport-manager/get-one-rapport-manager.component';
import { GetOneRapportSuperviseurComponent } from './get-one-rapport-superviseur/get-one-rapport-superviseur.component';
import { GetOneRapportTeamLeaderComponent } from './get-one-rapport-team-leader/get-one-rapport-team-leader.component';
import { GetAllRouterComponent } from './get-all-router/get-all-router.component';
import { GetAllDemandesComponent } from './get-all-demandes/get-all-demandes.component';
import { CreateRapportRouterComponent } from './create-rapport-router/create-rapport-router.component';
import { GetOneRouterComponent } from './get-one-router/get-one-router.component';
import { GetOneDemandeComponent } from './get-one-demande/get-one-demande.component';

@NgModule({
  declarations: [
    DemandesDeSanctionComponent,
    RapportTeamLeaderComponent,
    RapportSuperviseurComponent,
    RapportManagerComponent,
    RapportRhComponent,
    RapportRhPlus1Component,
    GetAllRapportTeamLeaderComponent,
    GetAllRapportSuperviseurComponent,
    GetAllRapportManagerComponent,
    GetAllRapportRhComponent,
    GetAllRapportRhPlus1Component,
    GetOneRapportRhPlus1Component,
    GetOneRapportRhComponent,
    GetOneRapportManagerComponent,
    GetOneRapportSuperviseurComponent,
    GetOneRapportTeamLeaderComponent,
    GetAllRouterComponent,
    GetAllDemandesComponent,
    CreateRapportRouterComponent,
    GetOneRouterComponent,
    GetOneDemandeComponent
  ],
  imports: [
    CommonModule,
    DemandesDeSanctionRoutingModule,NgxExtendedPdfViewerModule,AngularMaterialModule,
    ReactiveFormsModule,
  ]
})
export class DemandesDeSanctionModule { }
