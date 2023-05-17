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
import { RapportRh } from 'src/app/entities/RapportRh';
import { DemandesDeSanctionService } from '../demandes-de-sanction.service';

@Component({
  selector: 'app-get-all-rapport-rh',
  templateUrl: './get-all-rapport-rh.component.html',
  styleUrls: ['./get-all-rapport-rh.component.css']
})
export class GetAllRapportRhComponent implements OnInit,AfterViewInit  {

  constructor(private demandesDeSanctionService:DemandesDeSanctionService,
    private router: Router,
   )
  {}
  authenticatedUser:AuthenticationResponse;

  rapportsDemandes = new Map<number, demandeDeSanction>();
  dataSource: MatTableDataSource<RapportRh>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;

  displayedColumnsTeamLeader: string[] = ['demande_de_sanction_id', 'user_matricule'
  , 'date_embauche','age','nbr_enfants','date','_validated','afficher']; 

  rhRapports: RapportRh[] = [];
  isRhAuthenticated:boolean;



  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    const authenticatedUserJson = localStorage.getItem('authenticatedUser');
    this.authenticatedUser=JSON.parse(authenticatedUserJson);
    this.isRhAuthenticated=this.authenticatedUser.userRole.toString()=="ROLE_RH";
    this.getAllRapport();
  }
  
  




 getAllRapport(){



  if(this.authenticatedUser.userRole.toString()=="ROLE_RH"){
    this.demandesDeSanctionService.getAllRapportRh().subscribe(
      (response)=>{
       this.rhRapports=response;
       this.dataSource = new MatTableDataSource( this.rhRapports.filter(
         (rapport) => rapport.user_matricule === this.authenticatedUser.matricule
       ));
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.matSort;
     }
   );
  }else {


    this.demandesDeSanctionService.getAllRapportRh().subscribe(
      (response) => {
        console.log(response)
                      this.rhRapports = response;
                      this.rhRapports.forEach((rapport)=>{
                      this.getDemandeDeSanction(rapport.demande_de_sanction_id).subscribe(
                        (response)=>{
                          this.rapportsDemandes.set(rapport.id,response)
                          this.dataSource = new MatTableDataSource(this.rhRapports.filter(
                            (rapport) => {
                              
                             if(this.rapportsDemandes.get(rapport.id)?.departement==this.authenticatedUser.department 
                             && this.rapportsDemandes.get(rapport.id)?.site==this.authenticatedUser.site){
                              if(this.authenticatedUser.userRole.toString()=="ROLE_RH_PLUS1"){
                                return !rapport.processed_by_rhplus1 && rapport.date
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
    this.router.navigate(['/demandes-de-sanction/getRhRapport'], navigationExtras);
  }



addRapport(){
  this.router.navigate(['demandes-de-sanction/createRapportRh']);
}

filter(e:any){
  this.dataSource.filter=e.target.value;
}

}
