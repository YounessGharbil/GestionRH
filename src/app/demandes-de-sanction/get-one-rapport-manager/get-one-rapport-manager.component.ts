import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationResponse } from 'src/app/auth/responses/AuthenticationResponse';
import { RapportManager } from 'src/app/entities/RapportManager';
import { DemandesDeSanctionService } from '../demandes-de-sanction.service';

@Component({
  selector: 'app-get-one-rapport-manager',
  templateUrl: './get-one-rapport-manager.component.html',
  styleUrls: ['./get-one-rapport-manager.component.css']
})
export class GetOneRapportManagerComponent implements OnInit {
  constructor(private demandesDeSanctionService:DemandesDeSanctionService,
    private route: ActivatedRoute,
    private router: Router){}
    authenticatedUser:AuthenticationResponse;
    linkToRouteTo:string;

  ngOnInit(): void {
    const authenticatedUserJson = localStorage.getItem('authenticatedUser');
    this.authenticatedUser=JSON.parse(authenticatedUserJson);
    
    
    if(this.authenticatedUser.userRole.toString()=="ROLE_RH"){
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
  rapport:RapportManager;
  getRapport(){
    this.route.queryParamMap.subscribe(params => {
      const id = +params.get('id');
      this.demandesDeSanctionService.getRapportManager(id).subscribe({
        next:(response)=>{
          
        this.rapport=response
        console.log("this.rapport")

        console.log(this.rapport)
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
  setRapport(rapport:RapportManager){
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
