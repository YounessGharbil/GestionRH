import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationResponse } from 'src/app/auth/responses/AuthenticationResponse';
import { IRapport } from 'src/app/entities/IRapport';
import { RapportRh } from 'src/app/entities/RapportRh';
import { DemandesDeSanctionService } from '../demandes-de-sanction.service';

@Component({
  selector: 'app-get-one-rapport-rh',
  templateUrl: './get-one-rapport-rh.component.html',
  styleUrls: ['./get-one-rapport-rh.component.css']
})
export class GetOneRapportRhComponent implements OnInit {
  constructor(private demandesDeSanctionService:DemandesDeSanctionService,
    private route: ActivatedRoute,
    private router: Router){}
    linkToRouteTo:string
    authenticatedUser:AuthenticationResponse

  ngOnInit(): void {
    const authenticatedUserJson = localStorage.getItem('authenticatedUser');
    this.authenticatedUser=JSON.parse(authenticatedUserJson);
    
    
    if(this.authenticatedUser.userRole.toString()=="ROLE_RH_PLUS1"){
      this.linkToRouteTo='../../demandes-de-sanction/createRapportRhPlus1';
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
  rapport:RapportRh;
  getRapport(){
    this.route.queryParamMap.subscribe(params => {
      const id = +params.get('id');
      this.demandesDeSanctionService.getRapportRh(id).subscribe({
         next:(response)=>{
        this.rapport=response;
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
  setRapport(rapport:RapportRh){
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
