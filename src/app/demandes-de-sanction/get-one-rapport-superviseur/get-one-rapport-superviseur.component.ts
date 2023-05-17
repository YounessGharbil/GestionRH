import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationResponse } from 'src/app/auth/responses/AuthenticationResponse';
import { RapportSuperviseur } from 'src/app/entities/RapportSuperviseur';
import { DemandesDeSanctionService } from '../demandes-de-sanction.service';

@Component({
  selector: 'app-get-one-rapport-superviseur',
  templateUrl: './get-one-rapport-superviseur.component.html',
  styleUrls: ['./get-one-rapport-superviseur.component.css']
})
export class GetOneRapportSuperviseurComponent implements OnInit {
  constructor(private demandesDeSanctionService:DemandesDeSanctionService,
    private route: ActivatedRoute,
    private router: Router){}
    authenticatedUser:AuthenticationResponse;
    linkToRouteTo:string;

  ngOnInit(): void {
    const authenticatedUserJson = localStorage.getItem('authenticatedUser');
    this.authenticatedUser=JSON.parse(authenticatedUserJson);
    
    
    if(this.authenticatedUser.userRole.toString()=="ROLE_MANAGER"){
      this.linkToRouteTo='../../demandes-de-sanction/createRapportManager';
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
  rapport:RapportSuperviseur;
  getRapport(){
    this.route.queryParamMap.subscribe(params => {
      const id = +params.get('id');
      this.demandesDeSanctionService.getRapportSuperviseur(id).subscribe({
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
  setRapport(rapport:RapportSuperviseur){
    this.rapport=rapport;
    console.log('---------##################-------');
    console.log(this.rapport);
    console.log('----------##################------');
    
  }

  updateSalarie(){
    // this.router.navigate(['/salaries/update/'+this.salarie.id]);
  }
  deleteSalarie(){
    // console.log("inside delete"+"  "+this.salarie.id);
    // this.router.navigate(['/salaries/delete/'+this.salarie.id]);
  }


}
