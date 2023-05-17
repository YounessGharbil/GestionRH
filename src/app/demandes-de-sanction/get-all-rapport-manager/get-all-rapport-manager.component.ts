import { Component,OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthenticationResponse } from 'src/app/auth/responses/AuthenticationResponse';
import { demandeDeSanction } from 'src/app/entities/DemandeDeSanction';
import { IRapport } from 'src/app/entities/IRapport';
import { RapportManager } from 'src/app/entities/RapportManager';
import { DemandesDeSanctionService } from '../demandes-de-sanction.service';

@Component({
  selector: 'app-get-all-rapport-manager',
  templateUrl: './get-all-rapport-manager.component.html',
  styleUrls: ['./get-all-rapport-manager.component.css']
})
export class GetAllRapportManagerComponent implements OnInit,AfterViewInit {

  constructor(private demandesDeSanctionService:DemandesDeSanctionService,
    private router: Router,
    )
  {}
  authenticatedUser:AuthenticationResponse;

  rapportsDemandes = new Map<number, demandeDeSanction>();
  dataSource: MatTableDataSource<RapportManager>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;

  managerRapports: RapportManager[] = [];
  isManagerAuthenticated:boolean;

  
  displayedColumnsTeamLeader: string[] = ['demande_de_sanction_id', 'user_matricule'
                          , 'avis_manager','sanction_demande','date','_validated','afficher']; 

  ngOnInit(): void {
    const authenticatedUserJson = localStorage.getItem('authenticatedUser');
    this.authenticatedUser=JSON.parse(authenticatedUserJson);
    this.isManagerAuthenticated=this.authenticatedUser.userRole.toString()=="ROLE_MANAGER";

    this.getAllRapport();
  }
  ngAfterViewInit(): void {
    
  }
   getAllRapport(){
    if(this.authenticatedUser.userRole.toString()=="ROLE_MANAGER"){
    this.demandesDeSanctionService.getAllRapportManager().subscribe(
      (response)=>{
        this.managerRapports=response;
        this.dataSource = new MatTableDataSource(this.managerRapports.filter(
          (rapport) => rapport.user_matricule === this.authenticatedUser.matricule
        ));
        this.dataSource.sort=this.matSort;    
        this.dataSource.paginator = this.paginator;
        });
      }else {
        this.demandesDeSanctionService.getAllRapportManager().subscribe(
          (response) => {
                          this.managerRapports = response;
                          this.managerRapports.forEach((rapport)=>{
                          this.getDemandeDeSanction(rapport.demande_de_sanction_id).subscribe(
                            (response)=>{
                              this.rapportsDemandes.set(rapport.id,response)
                              this.dataSource = new MatTableDataSource(this.managerRapports.filter(
                                (rapport) => {
                                  
                                 if(this.rapportsDemandes.get(rapport.id)?.departement==this.authenticatedUser.department 
                                 && this.rapportsDemandes.get(rapport.id)?.site==this.authenticatedUser.site){
                                  if(this.authenticatedUser.userRole.toString()=="ROLE_RH"){
                                    console.log(rapport)
                                    return !rapport._processed_by_rh && rapport.avis_manager
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
    this.router.navigate(['/demandes-de-sanction/getManagerRapport'], navigationExtras);
  }



addRapport(){
  this.router.navigate(['demandes-de-sanction/createRapportManager']);
}

filter(e:any){
  this.dataSource.filter=e.target.value;
}

}
