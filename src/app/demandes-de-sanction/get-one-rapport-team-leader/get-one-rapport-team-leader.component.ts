import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationResponse } from 'src/app/auth/responses/AuthenticationResponse';
import { IRapport } from 'src/app/entities/IRapport';
import { RapportTeamLeader } from 'src/app/entities/RapportTeamLeader';
import { DemandesDeSanctionService } from '../demandes-de-sanction.service';

@Component({
  selector: 'app-get-one-rapport-team-leader',
  templateUrl: './get-one-rapport-team-leader.component.html',
  styleUrls: ['./get-one-rapport-team-leader.component.css']
})
export class GetOneRapportTeamLeaderComponent implements OnInit{
  constructor(private demandesDeSanctionService:DemandesDeSanctionService,
    private route: ActivatedRoute,
    private router: Router){}

  rapport:RapportTeamLeader;
  authenticatedUser:AuthenticationResponse;
  linkToRouteTo:string;



  ngOnInit(): void {
    const authenticatedUserJson = localStorage.getItem('authenticatedUser');
    this.authenticatedUser=JSON.parse(authenticatedUserJson);
    
    
    if(this.authenticatedUser.userRole.toString()=="ROLE_SUPERVISEUR"){
      this.linkToRouteTo='../../demandes-de-sanction/createRapportSuperviseur';
    }else if(this.authenticatedUser.userRole.toString()=="ROLE_RH"){
      this.linkToRouteTo='../../demandes-de-sanction/createRapportRh';
    }
    else{
      this.linkToRouteTo='';
    }
    if(history.state.rapport){
      this.setRapport(history.state.rapport);
    }
    else{
      this.getRapport();
    }
    
  }
  
  getRapport(){
    this.route.queryParamMap.subscribe(params => {
      const id = +params.get('id');
      this.demandesDeSanctionService.getRapportTeamLeader(id).subscribe({
         next:(response)=>{
        this.rapport=response
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        console.log("task complete")
      }
      });
    });
  }
  setRapport(rapport:RapportTeamLeader){
    this.rapport=rapport;
  }

  updateSalarie(){
    // this.router.navigate(['/salaries/update/'+this.salarie.id]);
  }
  deleteSalarie(){
    // console.log("inside delete"+"  "+this.salarie.id);
    // this.router.navigate(['/salaries/delete/'+this.salarie.id]);
  }

}
