import { Component, OnInit ,DoCheck,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthenticationResponse } from './auth/responses/AuthenticationResponse';
import { DemandesDeSanctionService } from './demandes-de-sanction/demandes-de-sanction.service';
import { IRapport } from './entities/IRapport';
import { RapportManager } from './entities/RapportManager';
import { RapportRh } from './entities/RapportRh';
import { RapportRhPlus1 } from './entities/RapportRhPlus1';
import { RapportSuperviseur } from './entities/RapportSuperviseur';
import { RapportTeamLeader } from './entities/RapportTeamLeader';
import { Role } from './enums/Role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor(private demandesDeSanctionService:DemandesDeSanctionService)
  {}
  
 
  authenticatedUser:AuthenticationResponse;
  isRhAuthenticated:boolean=false;
  isRhPlusAuthenticated:boolean=false;
  isTeamleaderAuthenticated:boolean=false;
  isManagerAuthenticated:boolean=false;
  isSuperviseurAuthenticated:boolean=false;
  isUserAuthenticated:boolean=false;
  isMesuresDisciplinairesUserAuthenticated:boolean=false;
  isServiceMedicalUserAuthenticated:boolean=false;
  ngOnInit(): void {
    const authenticatedUserJson = localStorage.getItem('authenticatedUser');
    this.authenticatedUser=JSON.parse(authenticatedUserJson);
    if(this.authenticatedUser){
      this.isRhPlusAuthenticated=this.authenticatedUser.userRole.toString()=="ROLE_RH_PLUS1";
      this.isRhAuthenticated=this.authenticatedUser.userRole.toString()=="ROLE_RH";
      this.isManagerAuthenticated=this.authenticatedUser.userRole.toString()=="ROLE_MANAGER";
      this.isSuperviseurAuthenticated=this.authenticatedUser.userRole.toString()=="ROLE_SUPERVISEUR";
      this.isTeamleaderAuthenticated=this.authenticatedUser.userRole.toString()=="ROLE_TEAM_LEADER";
      this.isMesuresDisciplinairesUserAuthenticated=this.isRhPlusAuthenticated ||  this.isRhAuthenticated ||  this.isManagerAuthenticated ||  this.isSuperviseurAuthenticated ||  this.isTeamleaderAuthenticated
      this.isUserAuthenticated=this.isRhPlusAuthenticated ||  this.isRhAuthenticated ||  this.isManagerAuthenticated ||  this.isSuperviseurAuthenticated ||  this.isTeamleaderAuthenticated
      this.isServiceMedicalUserAuthenticated=this.isRhPlusAuthenticated ||  this.isRhAuthenticated;
    }
  }

  title = 'Gestion RH';
  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  hideMenu() {
    this.showMenu = false;
  }

  dataSource: MatTableDataSource<IRapport>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;


  rapportsNotProcessedBySuperviseur:RapportTeamLeader[];
  rapportsNotProcessedByManager:RapportSuperviseur[];
  


  getRapportsNotProcessedBySuperviseur(){
    this.demandesDeSanctionService.getAllRapportTeamLeader().subscribe(
      {
        next:(response)=>{
          this.rapportsNotProcessedBySuperviseur=response
          this.dataSource = new MatTableDataSource(
            this.rapportsNotProcessedBySuperviseur
            .filter((rapport)=>!rapport.processed_by_superviseur && !rapport.escalated_to_rh)
          )
        },
        error:(err)=>{
          console.log(err)
        },
        complete:()=>{
          console.log("task Completed")
        }
      }
    )
  }
  getRapportsNotProcessedByManager(){
    this.demandesDeSanctionService.getAllRapportSuperviseur().subscribe(
      {
        next:(response)=>{
          this.rapportsNotProcessedByManager=response
          this.dataSource = new MatTableDataSource(
            this.rapportsNotProcessedByManager
            .filter((rapport)=>!rapport.processed_by_manager && !rapport.escalated_to_rh)
          )
        },
        error:(err)=>{
          console.log(err)
        },
        complete:()=>{
          console.log("task Completed")
        }
      }
    )
  }

  
}
 