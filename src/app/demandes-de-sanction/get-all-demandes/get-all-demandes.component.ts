import { Component,OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthenticationResponse } from 'src/app/auth/responses/AuthenticationResponse';
import { demandeDeSanction } from 'src/app/entities/DemandeDeSanction';
import { IRapport } from 'src/app/entities/IRapport';
import { Role } from 'src/app/enums/Role';
import { DemandesDeSanctionService } from '../demandes-de-sanction.service';

@Component({
  selector: 'app-get-all-demandes',
  templateUrl: './get-all-demandes.component.html',
  styleUrls: ['./get-all-demandes.component.css']
})
export class GetAllDemandesComponent implements OnInit,AfterViewInit  {
  constructor(private demandesDeSanctionService:DemandesDeSanctionService,
    private router: Router)
  {}
  authenticatedUser:AuthenticationResponse;

  dataSource: MatTableDataSource<demandeDeSanction>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;

  demandes: demandeDeSanction[] = [];

  displayedColumnsTeamLeader: string[] = ['salarie_id', 'user_id',
  'teamLeaderValidation','superviseurValidation','managerValidation'
  ,'rhValidation','rhPlus1Validation' ,'demandeStatus','niveauDeTraitement','afficher']; 

  ngOnInit(): void {
    const authenticatedUserJson = localStorage.getItem('authenticatedUser');
    this.authenticatedUser=JSON.parse(authenticatedUserJson);
    this.getAllDemandes();
  }


  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
  
 getAllDemandes(){
    this.demandesDeSanctionService.getAllDemandes().subscribe({
        next:(response)=>{
        this.demandes=response;
        this.dataSource = new MatTableDataSource<demandeDeSanction>(this.demandes.filter(
          (demande) => (demande.departement === this.authenticatedUser.department)
                        && (demande.site === this.authenticatedUser.site)
        )); 
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.sort=this.matSort;    
      this.dataSource.paginator = this.paginator;

      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        console.log("task complete")
      }
      
    }
    
      );
  }

  showDetails(demande: demandeDeSanction): void {
    const navigationExtras: NavigationExtras = {
      state: {
        demande: demande
      }
    };
    this.router.navigate(['/demandes-de-sanction/getDemande'], navigationExtras);
  }



addRapport(){
  this.router.navigate(['demandes-de-sanction/createRapportTeamLeader']);
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
this.dataSource.filter = filterValue.trim().toLowerCase();

if (this.dataSource.paginator) {
  this.dataSource.paginator.firstPage();
}
}

filter(e:any){
  this.dataSource.filter=e.target.value;
}

}
