import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRapportRouterComponent } from './create-rapport-router/create-rapport-router.component';
import { DemandesDeSanctionComponent } from './demandes-de-sanction.component';
import { GetAllDemandesComponent } from './get-all-demandes/get-all-demandes.component';
import { GetAllRapportManagerComponent } from './get-all-rapport-manager/get-all-rapport-manager.component';
import { GetAllRapportRhPlus1Component } from './get-all-rapport-rh-plus1/get-all-rapport-rh-plus1.component';
import { GetAllRapportRhComponent } from './get-all-rapport-rh/get-all-rapport-rh.component';
import { GetAllRapportSuperviseurComponent } from './get-all-rapport-superviseur/get-all-rapport-superviseur.component';
import { GetAllRapportTeamLeaderComponent } from './get-all-rapport-team-leader/get-all-rapport-team-leader.component';
import { GetAllRouterComponent } from './get-all-router/get-all-router.component';
import { GetOneDemandeComponent } from './get-one-demande/get-one-demande.component';
import { GetOneRapportManagerComponent } from './get-one-rapport-manager/get-one-rapport-manager.component';
import { GetOneRapportRhPlus1Component } from './get-one-rapport-rh-plus1/get-one-rapport-rh-plus1.component';
import { GetOneRapportRhComponent } from './get-one-rapport-rh/get-one-rapport-rh.component';
import { GetOneRapportSuperviseurComponent } from './get-one-rapport-superviseur/get-one-rapport-superviseur.component';
import { GetOneRapportTeamLeaderComponent } from './get-one-rapport-team-leader/get-one-rapport-team-leader.component';
import { GetOneRouterComponent } from './get-one-router/get-one-router.component';
import { RapportManagerComponent } from './rapport-manager/rapport-manager.component';
import { RapportRhPlus1Component } from './rapport-rh-plus1/rapport-rh-plus1.component';
import { RapportRhComponent } from './rapport-rh/rapport-rh.component';
import { RapportSuperviseurComponent } from './rapport-superviseur/rapport-superviseur.component';
import { RapportTeamLeaderComponent } from './rapport-team-leader/rapport-team-leader.component';

const routes: Routes = [
  { path: 'createRapport', component:CreateRapportRouterComponent},
  { path: 'createRapportTeamLeader', component:RapportTeamLeaderComponent },
  { path: 'createRapportSuperviseur', component:RapportSuperviseurComponent },
  { path: 'createRapportManager', component:RapportManagerComponent },
  { path: 'createRapportRh', component:RapportRhComponent },
  { path: 'createRapportRhPlus1', component:RapportRhPlus1Component },
  // { path: 'getAllRapports', component:GetAllRouterComponent },
  { path: 'getTeamLeaderRapports', component:GetAllRapportTeamLeaderComponent },
  { path: 'getSuperviseurRapports', component:GetAllRapportSuperviseurComponent },
  { path: 'getManagerRapports', component:GetAllRapportManagerComponent },
  { path: 'getRhRapports', component:GetAllRapportRhComponent },
  { path: 'getRhPlus1Rapports', component:GetAllRapportRhPlus1Component },
  // { path: 'getOneRapport', component:GetOneRouterComponent },
  { path: 'getTeamLeaderRapport', component:GetOneRapportTeamLeaderComponent },
  { path: 'getSuperviseurRapport', component:GetOneRapportSuperviseurComponent },
  { path: 'getManagerRapport', component:GetOneRapportManagerComponent },
  { path: 'getRhRapport', component:GetOneRapportRhComponent },
  { path: 'getRhPlus1Rapport', component:GetOneRapportRhPlus1Component },
  { path: 'getAllDemandes', component:GetAllDemandesComponent },
  { path: 'getDemande', component:GetOneDemandeComponent },
  { path: 'demandePdf/:id', component: DemandesDeSanctionComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandesDeSanctionRoutingModule { }
