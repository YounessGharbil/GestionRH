import { Component,AfterViewInit,OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from 'src/app/auth/responses/AuthenticationResponse';
import { demandeDeSanction } from 'src/app/entities/DemandeDeSanction';
import { IRapport } from 'src/app/entities/IRapport';
import { RapportTeamLeader } from 'src/app/entities/RapportTeamLeader';
import { DemandesDeSanctionService } from '../demandes-de-sanction.service';

@Component({
  selector: 'app-get-all-rapport-team-leader',
  templateUrl: './get-all-rapport-team-leader.component.html',
  styleUrls: ['./get-all-rapport-team-leader.component.css']
})
export class GetAllRapportTeamLeaderComponent implements OnInit,AfterViewInit {

  constructor(private demandesDeSanctionService:DemandesDeSanctionService,
    private router: Router,
   )
  {}
  demande:demandeDeSanction;
  authenticatedUser:AuthenticationResponse;
  dataSource: MatTableDataSource<RapportTeamLeader>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  teamLeaderRapports: RapportTeamLeader[] = [];
  demandesIds:number[]=[];
  demandes:demandeDeSanction[]=[];
  rapportsDemandes = new Map<number, demandeDeSanction>();
  isTeamleaderAuthenticated:boolean;

  displayedColumnsTeamLeader: string[] = ['demande_de_sanction_id', 'userMatricule'
                          , 'salarieMatricule','fonction','section','dateCommis','la_faut',
                          'temoin','date','isValidated'
                          ,'processedBySuperviseur','escalatedToRh','afficher']; 



  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    const authenticatedUserJson = localStorage.getItem('authenticatedUser');
    this.authenticatedUser=JSON.parse(authenticatedUserJson);
    this.isTeamleaderAuthenticated=this.authenticatedUser.userRole.toString()=="ROLE_TEAM_LEADER";
    this.getAllRapport();
  }



 getAllRapport(){

  if(this.authenticatedUser.userRole.toString()=="ROLE_TEAM_LEADER"){
          
    this.demandesDeSanctionService.getAllRapportTeamLeader().subscribe(
      (response)=>{
        this.teamLeaderRapports=response;
        this.dataSource = new MatTableDataSource(this.teamLeaderRapports.filter(
          (rapport) => rapport.user_matricule ===this.authenticatedUser.matricule
        ));
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        

      }
      
      );
  }else  {
    this.demandesDeSanctionService.getAllRapportTeamLeader().subscribe(
      (response) => {
                      this.teamLeaderRapports = response;
                      this.teamLeaderRapports.forEach((rapport)=>{
                      this.getDemandeDeSanction(rapport.demande_de_sanction_id).subscribe(
                        (response)=>{
                          this.rapportsDemandes.set(rapport.id,response)
                          this.demandes.push(response)
                          this.dataSource = new MatTableDataSource(this.teamLeaderRapports.filter(
                            (rapport) => {
                              
                             if(this.rapportsDemandes.get(rapport.id)?.departement==this.authenticatedUser.department 
                             && this.rapportsDemandes.get(rapport.id)?.site==this.authenticatedUser.site){
                              if (this.authenticatedUser.userRole.toString() == "ROLE_SUPERVISEUR"){
                                console.log(rapport)
                                return !rapport.escalated_to_rh && !rapport.processed_by_superviseur
                              }
                              else if(this.authenticatedUser.userRole.toString() == "ROLE_RH"){
                                console.log(rapport)
                                return rapport.escalated_to_rh && !rapport.processed_by_superviseur
                              }
                              return false
                             }
                             return false
                            }
                          ));
                        })
                      })
                  }
    );
  }
  // else{
  //   console.log("unknown error")
  // }
}



  getDemandeDeSanction(id: number): Observable<demandeDeSanction> {
    return this.demandesDeSanctionService.getDemande(id);
  }

  showDetails(rapport: IRapport): void {
    const navigationExtras: NavigationExtras = {
      state: {
        rapport: rapport
      }
    };
    this.router.navigate(['/demandes-de-sanction/getTeamLeaderRapport'], navigationExtras);
  }



addRapport(){
  this.router.navigate(['demandes-de-sanction/createRapportTeamLeader']);
}

filter(e:any){
  this.dataSource.filter=e.target.value;
}

}
