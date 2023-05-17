import { Component,OnInit,AfterViewInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { AuthenticationResponse } from 'src/app/auth/responses/AuthenticationResponse';
import { IRapport } from 'src/app/entities/IRapport';
import { RapportRhPlus1 } from 'src/app/entities/RapportRhPlus1';
import { DemandesDeSanctionService } from '../demandes-de-sanction.service';

@Component({
  selector: 'app-get-all-rapport-rh-plus1',
  templateUrl: './get-all-rapport-rh-plus1.component.html',
  styleUrls: ['./get-all-rapport-rh-plus1.component.css']
})
export class GetAllRapportRhPlus1Component implements  OnInit,AfterViewInit{
  constructor(private demandesDeSanctionService:DemandesDeSanctionService,
    private router: Router,
   )
  {}
  authenticatedUser:AuthenticationResponse;


  dataSource: MatTableDataSource<RapportRhPlus1>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;

  rhPlus1Rapports: RapportRhPlus1[] = [];
  isRhPlusAuthenticated:boolean;


  displayedColumnsTeamLeader: string[] = ['demande_de_sanction_id', 'user_matricule'
                          , 'commentaire','decision_final','date','_validated','afficher']; 


  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    const authenticatedUserJson = localStorage.getItem('authenticatedUser');
    this.authenticatedUser=JSON.parse(authenticatedUserJson);
    this.isRhPlusAuthenticated=this.authenticatedUser.userRole.toString()=="ROLE_RH_PLUS1";
    this.getAllRapport();
  }

  
 
 getAllRapport(){
    this.demandesDeSanctionService.getAllRapportRhPlus1().subscribe({
      next:(response)=>{
        this.rhPlus1Rapports=response;
        this.dataSource = new MatTableDataSource(this.rhPlus1Rapports.filter(
          (rapport) => rapport.user_matricule === this.authenticatedUser.matricule
        ));
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.matSort;
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        console.log("task complete")
      }
      
    });
  }

  showDetails(rapport: IRapport): void {
    const navigationExtras: NavigationExtras = {
      state: {
        rapport: rapport
      }
    };
    this.router.navigate(['/demandes-de-sanction/getRhPlus1Rapport'], navigationExtras);
  }



addRapport(){
  this.router.navigate(['demandes-de-sanction/createRapportRhPlus1']);

}

filter(e:any){
  this.dataSource.filter=e.target.value;
}

}
