import { Component,ViewChild ,OnInit,AfterViewInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from 'src/app/auth/responses/AuthenticationResponse';
import { demandeDeSanction } from 'src/app/entities/DemandeDeSanction';
import { IRapport } from 'src/app/entities/IRapport';
import { RapportSuperviseur } from 'src/app/entities/RapportSuperviseur';
import { Salarie } from 'src/app/entities/Salarie';
import { SalariesService } from 'src/app/salaries/salaries.service';
import { DemandesDeSanctionService } from '../demandes-de-sanction.service';

@Component({
  selector: 'app-get-all-rapport-superviseur',
  templateUrl: './get-all-rapport-superviseur.component.html',
  styleUrls: ['./get-all-rapport-superviseur.component.css']
})
export class GetAllRapportSuperviseurComponent implements OnInit,AfterViewInit  {
  constructor(private demandesDeSanctionService:DemandesDeSanctionService,
    private router: Router,
    private salariesService:SalariesService
   )
  {}
  authenticatedUser:AuthenticationResponse;
  isSuperviseurAuthenticated:boolean;
  demande:demandeDeSanction;
  salarie:Salarie;
  isSalarieDirect:boolean;


  rapportsDemandes = new Map<number, demandeDeSanction>();
  dataSource: MatTableDataSource<RapportSuperviseur>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;

  superviseurRapports: RapportSuperviseur[] = [];

  displayedColumnsTeamLeader: string[] = ['demande_de_sanction_id', 'user_matricule'
                          , 'avis','sanction_demande','date','_validated',
                          'processed_by_manager','escalated_to_rh','afficher']; 


  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    const authenticatedUserJson = localStorage.getItem('authenticatedUser');
    this.authenticatedUser=JSON.parse(authenticatedUserJson);
    this.isSuperviseurAuthenticated=this.authenticatedUser.userRole.toString()=="ROLE_SUPERVISEUR";
    this.getAllRapport();
  }


 getAllRapport(){
  if(this.authenticatedUser.userRole.toString()=="ROLE_SUPERVISEUR"){
    this.demandesDeSanctionService.getAllRapportSuperviseur().subscribe(
      (response)=>{
        this.superviseurRapports=response;
        this.dataSource = new MatTableDataSource(this.superviseurRapports.filter(
          (rapport) => rapport.user_matricule === this.authenticatedUser.matricule
        ));
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.matSort;
      }
      );
  }else {


    this.demandesDeSanctionService.getAllRapportSuperviseur().subscribe(
      (response) => {
                      this.superviseurRapports = response;
                      this.superviseurRapports.forEach((rapport)=>{
                      this.getDemandeDeSanction(rapport.demande_de_sanction_id).subscribe(
                        (response)=>{
                          this.rapportsDemandes.set(rapport.id,response)
                          this.dataSource = new MatTableDataSource(this.superviseurRapports.filter(
                            (rapport) => {
                              
                             if(this.rapportsDemandes.get(rapport.id)?.departement==this.authenticatedUser.department 
                             && this.rapportsDemandes.get(rapport.id)?.site==this.authenticatedUser.site){
                              if(this.authenticatedUser.userRole.toString()=="ROLE_MANAGER"){
                                // this.demandesDeSanctionService.getDemande(rapport.demande_de_sanction_id).subscribe(response=>{
                                //   this.demande=response
                                // });
                                // this.salariesService.getSalarie(this.demande.salarie_id).subscribe(response=>{
                                //   this.salarie=response
                                // })
                                
                                return !rapport.escalated_to_rh && !rapport.processed_by_manager 
                              }else if(this.authenticatedUser.userRole.toString() == "ROLE_RH"){
                                console.log(rapport)
                                return rapport.escalated_to_rh && !rapport.processed_by_manager
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
    this.router.navigate(['/demandes-de-sanction/getSuperviseurRapport'], navigationExtras);
  }



addRapport(){
  this.router.navigate(['demandes-de-sanction/createRapportSuperviseur']);

}

filter(e:any){
  this.dataSource.filter=e.target.value;
}

}
