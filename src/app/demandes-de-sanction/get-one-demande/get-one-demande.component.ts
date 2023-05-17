import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { demandeDeSanction } from 'src/app/entities/DemandeDeSanction';
import { DemandesDeSanctionService } from '../demandes-de-sanction.service';

@Component({
  selector: 'app-get-one-demande',
  templateUrl: './get-one-demande.component.html',
  styleUrls: ['./get-one-demande.component.css']
})
export class GetOneDemandeComponent implements OnInit {
  hasRapportError: boolean;

  constructor(private demandesDeSanctionService:DemandesDeSanctionService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    if(history.state.demande){
      this.setDemande(history.state.demande);
      console.log(history.state.demande)
    }
    else{
      this.getDemande();
    }
    
  }
  demande:demandeDeSanction;
  getDemande(){
    this.route.queryParamMap.subscribe(params => {
      const id = +params.get('id');
      this.demandesDeSanctionService.getDemande(id).subscribe({
      next:(response)=>{ 
          console.log(response);
      },
      error:(error)=>{
        console.log(error);
      }
      
      });
    });
  }
  setDemande(demande:demandeDeSanction){
    this.demande=demande;
  }

  getTeamLeaderRapport(){
    this.demandesDeSanctionService.getRapportTeamLeader(this.demande.rapportTeamLeader).subscribe(
      (response)=>{
        const navigationExtras: NavigationExtras = {
          state: {
            rapport: response
          }
        };
        this.router.navigate(['/demandes-de-sanction/getTeamLeaderRapport'],navigationExtras)
      },
      (error)=>{
        console.log(error);
        this.hasRapportError = true;
      }
    )
  }

  getSuperviseurRapport(){
    
    this.demandesDeSanctionService.getRapportSuperviseur(this.demande.rapportSuperviseur).subscribe(
      (response)=>{
        const navigationExtras: NavigationExtras = {
          state: {
            rapport: response
          }
        };
        this.router.navigate(['/demandes-de-sanction/getSuperviseurRapport'],navigationExtras)

      },
      (error)=>{
        console.log(error);
        this.hasRapportError = true;
      }
    )
  }

  getManagerRapport(){
    this.demandesDeSanctionService.getRapportManager(this.demande.rapportManager).subscribe(
      (response)=>{
        const navigationExtras: NavigationExtras = {
          state: {
            rapport: response
          }
        };
        this.router.navigate(['/demandes-de-sanction/getManagerRapport'],navigationExtras)

      },
      (error)=>{
        console.log(error);
        this.hasRapportError = true;
      }
    )
  }


  getRhRapport(){
    this.demandesDeSanctionService.getRapportRh(this.demande.rapportRh).subscribe(
      (response)=>{
        const navigationExtras: NavigationExtras = {
          state: {
            rapport: response
          }
        };
        this.router.navigate(['/demandes-de-sanction/getRhRapport'],navigationExtras)

      },
      (error)=>{
        console.log(error);
        this.hasRapportError = true;
      }
    )
  }


  getRhPlus1Rapport(){
    this.demandesDeSanctionService.getRapportRhPlus1(this.demande.rapportRhplus1).subscribe(
      (response)=>{
        const navigationExtras: NavigationExtras = {
          state: {
            rapport: response
          }
        };
        this.router.navigate(['/demandes-de-sanction/getRhPlus1Rapport'],navigationExtras)

      },
      (error)=>{
        console.log(error);
        this.hasRapportError = true;
      }
    )
  }
}
